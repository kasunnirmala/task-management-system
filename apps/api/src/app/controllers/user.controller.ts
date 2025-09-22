import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard, PermissionsGuard } from '@task-mgmt-sys/api-auth';
import { ROLE_PERMISSIONS, UserRole } from '@task-mgmt-sys/data';
import { Permissions } from '../decorators/permissions.decorator';
import { UserService } from './../services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard, PermissionsGuard)
  @Permissions(...ROLE_PERMISSIONS[UserRole.VIEWER])
  @Get()
  getData() {
    return this.userService.findAll();
  }
}
