import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard, PermissionsGuard } from '@task-mgmt-sys/api-auth';
import {
  CompleteTaskDto,
  CreateTaskDto,
  GetTaskByAssignDto,
  GetTaskByOrgDto,
  ROLE_PERMISSIONS,
  TaskDto,
  UserRole,
} from '@task-mgmt-sys/data';
import { Permissions } from '../decorators/permissions.decorator';
import { TaskService } from '../services/task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @UseGuards(JwtAuthGuard, PermissionsGuard)
  @Permissions(...ROLE_PERMISSIONS[UserRole.ADMIN])
  @Get()
  getAllTasks(): Promise<TaskDto[]> {
    return this.taskService.findAll();
  }

  @UseGuards(JwtAuthGuard, PermissionsGuard)
  @Permissions(...ROLE_PERMISSIONS[UserRole.ADMIN])
  @Get(':id')
  getTaskById(@Param('id') id: number): Promise<TaskDto> {
    return this.taskService.findById(id);
  }

  @UseGuards(JwtAuthGuard, PermissionsGuard)
  @Permissions(...ROLE_PERMISSIONS[UserRole.ADMIN])
  @Post('assigned')
  getTaskByAssignedUser(
    @Body() getTaskByAssignDto: GetTaskByAssignDto
  ): Promise<TaskDto[]> {
    return this.taskService.findByAssignedUser(getTaskByAssignDto.userId);
  }

  @UseGuards(JwtAuthGuard, PermissionsGuard)
  @Permissions(...ROLE_PERMISSIONS[UserRole.ADMIN])
  @Post('org')
  getTaskByOrganization(
    @Body() getTaskByOrgDto: GetTaskByOrgDto
  ): Promise<TaskDto[]> {
    return this.taskService.findByOrganization(getTaskByOrgDto.organizationId);
  }

  @UseGuards(JwtAuthGuard, PermissionsGuard)
  @Permissions(...ROLE_PERMISSIONS[UserRole.ADMIN])
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto, @Req() req: any) {
    createTaskDto.createdBy = req.user.id;
    createTaskDto.organization = req.user.organizationId;
    return this.taskService.createTask(createTaskDto);
  }

  @UseGuards(JwtAuthGuard, PermissionsGuard)
  @Permissions(...ROLE_PERMISSIONS[UserRole.ADMIN])
  @Post('complete')
  completeTask(@Body() completeTaskDto: CompleteTaskDto) {
    return this.taskService.completeTask(completeTaskDto);
  }
}
