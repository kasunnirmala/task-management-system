import { Injectable } from '@angular/core';
import { LSK_ACCESS_TOKEN } from '../utils/const';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  setToken(token: string) {
    localStorage.setItem(LSK_ACCESS_TOKEN, token);
  }

  getToken(): string | null {
    return localStorage.getItem(LSK_ACCESS_TOKEN);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
