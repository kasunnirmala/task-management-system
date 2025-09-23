import { TaskOrganizationDto } from './task-org.dto';
import { TaskUserDto } from './task-user.dto';

export class TaskDto {
  id!: number;
  title!: string;
  description?: string;
  category!: string;
  isCompleted!: boolean;
  completedAt?: Date;
  organization!: TaskOrganizationDto;
  assignedTo?: TaskUserDto;
  createdBy!: TaskUserDto;
  createdAt!: Date;
  updatedAt!: Date;
}
