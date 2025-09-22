import { Controller, Get, UseGuards } from '@nestjs/common';
import {
    JwtAuthGuard,
    JWTAuthService,
    PermissionsGuard,
} from '@task-mgmt-sys/api-auth';
import { ROLE_PERMISSIONS, UserRole } from '@task-mgmt-sys/data';
import { Permissions } from '../decorators/permissions.decorator';
import { TaskService } from '../services/task.service';

@Controller('task')
export class TaskController {
  constructor(
    private readonly taskService: TaskService,
    private jwtAuthService: JWTAuthService
  ) {}

  @UseGuards(JwtAuthGuard, PermissionsGuard)
  @Permissions(...ROLE_PERMISSIONS[UserRole.ADMIN])
  @Get()
  getAllTasks() {
    return this.taskService.findAll();
  }
}
