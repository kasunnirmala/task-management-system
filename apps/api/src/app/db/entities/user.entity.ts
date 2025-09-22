import { User } from '@task-mgmt-sys/data';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class UserEntity implements User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 255 })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column({ length: 255 })
  firstName: string;

  @Column({ length: 255 })
  lastName: string;
  @Column({ length: 255 })
  role: string;
  // @Index()
  @Column()
  organizationId: number;
  // @ManyToOne(() => Organization, org => org.users, { onDelete: 'CASCADE' })
  // organization?: Organization;

  isActive: boolean;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
