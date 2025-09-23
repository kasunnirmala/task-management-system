import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  JwtAuthGuard,
  JWTAuthService,
  PermissionsGuard,
} from '@task-mgmt-sys/api-auth';
import {
  AuthenticatedUserDto,
  ROLE_PERMISSIONS,
  User,
  UserRole,
} from '@task-mgmt-sys/data';
import bcrypt from 'bcrypt';
import { Permissions } from '../decorators/permissions.decorator';
import { UserService } from './../services/user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private jwtAuthService: JWTAuthService
  ) {}
  @Post('login')
  async login(@Body() loggingUser: User) {
    const user = await this.userService.findByEmail(loggingUser.email);

    if (user && (await bcrypt.compare(loggingUser.password, user.password))) {
      const userPayload: AuthenticatedUserDto = {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        organizationId: user.organization.id,
        organizationName: user.organization.name,
        isActive: user.isActive,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        roleId: user.role.id,
        roleName: user.role.role,
        permissions: user.role.permission.map(
          (permission) => permission.permission
        ),
      };
      return {
        access_token: await this.jwtAuthService.signToken(
          JSON.parse(JSON.stringify(userPayload))
        ),
      };
    } else {
      throw new NotFoundException('User not found');
    }
  }

  @UseGuards(JwtAuthGuard, PermissionsGuard)
  @Permissions(...ROLE_PERMISSIONS[UserRole.VIEWER])
  @Get()
  getData() {
    return this.userService.findAll();
  }
}
