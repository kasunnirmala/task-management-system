import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
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

  @Column()
  completedAt?: Date;

  @OneToOne(() => OrganizationEntity)
  @JoinColumn()
  organization?: OrganizationEntity;

  @OneToOne(() => UserEntity)
  @JoinColumn()
  assignedTo: UserEntity;

  @OneToOne(() => UserEntity)
  @JoinColumn()
  createdBy: UserEntity;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
