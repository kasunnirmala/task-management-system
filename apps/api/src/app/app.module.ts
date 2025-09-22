import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskEntity } from './db/entities/task.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [TaskEntity],
      synchronize: true,
      // migrations: [__dirname + '/../db/migrations/**/*{.ts,.js}'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
