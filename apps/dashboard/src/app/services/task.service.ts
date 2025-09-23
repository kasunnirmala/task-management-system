import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {
  CompleteTaskDto,
  CreateTaskDto,
  GetTaskByAssignDto,
  GetTaskByOrgDto,
  TaskDto,
} from '@task-mgmt-sys/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/api/task';
  private http = inject(HttpClient);

  getAllTasks(): Observable<TaskDto[]> {
    return this.http.get<TaskDto[]>(this.apiUrl);
  }

  getTaskById(id: number): Observable<TaskDto> {
    return this.http.get<TaskDto>(`${this.apiUrl}/${id}`);
  }

  getTaskByAssignedUser(assignUser: GetTaskByAssignDto): Observable<TaskDto> {
    return this.http.post<TaskDto>(`${this.apiUrl}/assigned`, assignUser);
  }

  getTaskByOrganization(org: GetTaskByOrgDto): Observable<TaskDto> {
    return this.http.post<TaskDto>(`${this.apiUrl}/org`, org);
  }

  createTask(task: CreateTaskDto): Observable<TaskDto> {
    return this.http.post<TaskDto>(this.apiUrl, task);
  }
  completeTask(completeTaskDto: CompleteTaskDto): Observable<TaskDto> {
    return this.http.post<TaskDto>(`${this.apiUrl}/complete`, completeTaskDto);
  }
}
