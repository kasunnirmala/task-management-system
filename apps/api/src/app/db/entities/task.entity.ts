import { Task } from '@task-mgmt-sys/data';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tasks') // The table name will be 'tasks'
export class TaskEntity implements Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column('text')
  description: string;

  @Column({ default: false })
  isCompleted: boolean;
}