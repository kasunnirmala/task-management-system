import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiAuthModule } from '@task-mgmt-sys/api-auth';
import { UserController } from './controllers/user.controller';
import { UserEntity } from './db/entities/user.entity';
import { UserService } from './services/user.service';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/database.sqlite',
      entities: [UserEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UserEntity]),
    ApiAuthModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
