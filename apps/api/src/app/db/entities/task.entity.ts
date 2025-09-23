import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { OrganizationEntity } from './organization.entity';
import { UserEntity } from './user.entity';

@Entity('tasks')
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column({ length: 255 })
  description: string;

  @Column({ length: 255 })
  category: string;

  @Column()
  isCompleted: boolean;

  @CreateDateColumn()
  completedAt?: Date;

  @ManyToOne(() => OrganizationEntity)
  @JoinColumn()
  organization?: OrganizationEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn()
  assignedTo: UserEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn()
  createdBy: UserEntity;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
