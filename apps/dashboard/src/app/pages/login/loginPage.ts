import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './loginPage.html',
  styleUrl: './loginPage.css',
})
export class LoginPage {
  private loginService = inject(LoginService);
  private authService = inject(AuthService);
  private router = inject(Router);
  email?: string;
  password?: string;
  
  login() {
    this.loginService
      .login({ email: this.email ?? '', password: this.password ?? '' })
      .subscribe({
        next: (data) => {
          this.authService.setToken((data as any).access_token);
          this.router.navigate(['/']);
        },
        error: (err) => console.error('Error loading tasks', err),
      });
  }
}
