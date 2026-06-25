import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  selectedRole = 'Customer';

  onRoleChange(value: string): void {
    console.log('Selected dropdown value:', value);
  }
}