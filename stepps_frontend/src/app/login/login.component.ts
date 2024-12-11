import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  onLogin() {
    this.http.post('http://localhost:8000/api/token/', {
      username: this.username,
      password: this.password
    }).subscribe({
      next: (response: any) => {
        localStorage.setItem('token', response.access);
        localStorage.setItem('username', this.username);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.errorMessage = 'Credenciais inválidas';
        console.error('Login error:', error);
      }
    });
  }
}
