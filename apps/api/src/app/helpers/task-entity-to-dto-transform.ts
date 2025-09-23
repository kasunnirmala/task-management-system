import { TaskEntity } from '../db/entities/task.entity';

export function transformTaskEntityToDTO(task: TaskEntity) {
  return {
    id: task.id,
    title: task.title,
    description: task.description,
    category: task.category,
    isCompleted: task.isCompleted,
    completedAt: task.completedAt,
    organization: {
      id: task.organization.id,
      name: task.organization.name,
    },
    assignedTo: {
      id: task.assignedTo.id,
      email: task.assignedTo.email,
      firstName: task.assignedTo.firstName,
      lastName: task.assignedTo.lastName,
    },
    createdBy: {
      id: task.createdBy.id,
      email: task.createdBy.email,
      firstName: task.createdBy.firstName,
      lastName: task.createdBy.lastName,
    },
    createdAt: task.createdAt,
    updatedAt: task.updatedAt,
  };
}
