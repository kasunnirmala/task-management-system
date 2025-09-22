import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiAuthModule } from '@task-mgmt-sys/api-auth';
import { TaskController } from './controllers/task.controller';
import { UserController } from './controllers/user.controller';
import { OrganizationEntity } from './db/entities/organization.entity';
import { PermissionEntity } from './db/entities/permission.entity';
import { RoleEntity } from './db/entities/role.entity';
import { TaskEntity } from './db/entities/task.entity';
import { UserEntity } from './db/entities/user.entity';
import { TaskService } from './services/task.service';
import { UserService } from './services/user.service';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/database.sqlite',
      entities: [
        UserEntity,
        RoleEntity,
        PermissionEntity,
        OrganizationEntity,
        TaskEntity,
      ],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([
      UserEntity,
      RoleEntity,
      PermissionEntity,
      OrganizationEntity,
      TaskEntity,
    ]),
    ApiAuthModule,
  ],
  controllers: [UserController, TaskController],
  providers: [UserService, TaskService],
})
export class AppModule {}
