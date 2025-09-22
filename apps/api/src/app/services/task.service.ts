import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompleteTaskDto, CreateTaskDto, TaskDto } from '@task-mgmt-sys/data';
import { DeepPartial, Repository } from 'typeorm';
import { TaskEntity } from '../db/entities/task.entity';
import { transformTaskEntityToDTO } from '../helpers/task-entity-to-dto-transform';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>
  ) {}

  async findAll(): Promise<TaskDto[]> {
    const allTasks = await this.taskRepository.find({
      relations: {
        organization: true,
        assignedTo: true,
        createdBy: true,
      },
    });
    return allTasks.map((task) => transformTaskEntityToDTO(task));
  }

  async findById(id: number): Promise<TaskDto> {
    const task = await this.taskRepository.findOne({
      where: { id },
      relations: {
        organization: true,
        assignedTo: true,
        createdBy: true,
      },
    });
    return transformTaskEntityToDTO(task);
  }

  async findByAssignedUser(userId: number): Promise<TaskDto[]> {
    const allTasks = await this.taskRepository.find({
      relations: {
        organization: true,
        assignedTo: true,
        createdBy: true,
      },
      where: {
        assignedTo: {
          id: userId,
        },
      },
    });

    return allTasks.map((task) => transformTaskEntityToDTO(task));
  }

  async findByOrganization(organizationId: number): Promise<TaskDto[]> {
    const allTasks = await this.taskRepository.find({
      relations: {
        organization: true,
        assignedTo: true,
        createdBy: true,
      },
      where: {
        organization: {
          id: organizationId,
        },
      },
    });
    return allTasks.map((task) => transformTaskEntityToDTO(task));
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<TaskDto> {
    const taskToCreate: DeepPartial<TaskEntity> = {
      title: createTaskDto.title,
      description: createTaskDto.description,
      category: createTaskDto.category,
      isCompleted: false,
      completedAt: new Date(),
      organization: { id: createTaskDto.organization },
      assignedTo: { id: createTaskDto.assignedTo },
      createdBy: { id: createTaskDto.createdBy },
    };
    const task = this.taskRepository.create(taskToCreate);
    const savedTask = await this.taskRepository.save(task);
    return transformTaskEntityToDTO(savedTask);
  }

  async completeTask(completeTaskDto: CompleteTaskDto) {
    return this.taskRepository.update(completeTaskDto.taskId, {
      isCompleted: completeTaskDto.isCompleted,
      completedAt: completeTaskDto.isCompleted ? new Date() : null,
    });
  }
}
