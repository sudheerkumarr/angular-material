import { Component } from '@angular/core';

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  role: Role[] = [
    { value: 'customer', viewValue: 'Customer' },
    { value: 'admin', viewValue: 'Admin' }
  ];
}
