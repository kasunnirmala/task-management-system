import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CompleteTaskDto, TaskDto } from '@task-mgmt-sys/data';
import { TaskService } from '../../services/task.service';
import { LSK_ORGANIZATION_ID, LSK_USER_ID } from '../../utils/const';

@Component({
  selector: 'app-tasks-list-page',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatGridListModule],
  standalone: true,
  templateUrl: './TasksListPage.html',
  styleUrl: './TasksListPage.css',
})
export class TasksListPage implements OnInit {
  private taskService = inject(TaskService);
  allTasks: TaskDto[] = [];
  userId?: number;
  organizationId?: number;

  ngOnInit() {
    this.userId = Number(localStorage.getItem(LSK_USER_ID));
    this.organizationId = Number(localStorage.getItem(LSK_ORGANIZATION_ID));
    this.getAllTasks();
  }

  reload() {
    this.getAllTasks();
  }

  getAllTasks() {
    this.taskService.getAllTasks().subscribe({
      next: (data) => (this.allTasks = data),
      error: (err) => console.error('Error loading tasks', err),
    });
  }

  editButtonStatus(task: TaskDto): boolean {
    return !task.isCompleted;
  }

  deleteButtonStatus(task: TaskDto): boolean {
    return !task.isCompleted;
  }
  completedButtonStatus(task: TaskDto): boolean {
    return !task.isCompleted;
  }

  completeTask(task: TaskDto) {
    const CompleteTaskDto: CompleteTaskDto = {
      taskId: task.id,
      isCompleted: true,
    };

    this.taskService.completeTask(CompleteTaskDto).subscribe({
      next: () => this.reload(),
      error: (err) => console.error('Error loading tasks', err),
    });
  }
}
