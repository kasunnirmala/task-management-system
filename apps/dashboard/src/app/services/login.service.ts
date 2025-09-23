import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '@task-mgmt-sys/data';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/api/user';
  private http = inject(HttpClient);

  login(user: Partial<User>) {
    return this.http.post(`${this.apiUrl}/login`, user);
  }
}
