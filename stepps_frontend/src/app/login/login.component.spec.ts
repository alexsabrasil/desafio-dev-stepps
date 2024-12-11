import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private http: HttpClient) {}

  onLogin() {
    this.http
      .post('http://localhost:8000/api/login/', {
        username: this.username,
        password: this.password,
      })
      .subscribe(
        (response: any) => {
          console.log(response);
          // Redirecionar para o dashboard
        },
        (error) => {
          console.error('Login failed', error);
        }
      );
  }
}
