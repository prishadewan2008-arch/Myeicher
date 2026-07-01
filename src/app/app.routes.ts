import { Routes } from '@angular/router';
import { LoginPage } from './login-page/login-page';
import { CustomerCredentials } from './customer-credentials/customer-credentials';

export const routes: Routes = [
  { path: '', component: LoginPage },
  { path: 'customer-login', component: CustomerCredentials },
];
