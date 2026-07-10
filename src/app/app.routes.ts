import { Routes } from '@angular/router';
import { LoginPage } from './login-page/login-page';
import { CustomerCredentials } from './customer-credentials/customer-credentials';
import { DealerCredentials } from './dealer-credentials/dealer-credentials'
import { VecvCredentials } from './vecv-credentials/vecv-credentials';
import { LandingPage } from './landing-page/landing-page';
import { Alerts } from './alerts/alerts';

export const routes: Routes = [
  { path: '', component: LoginPage },
  { path: 'customer-login', component: CustomerCredentials },
  { path: 'dealer-login', component: DealerCredentials},
  { path: 'vecv-login', component: VecvCredentials},
  { path: 'landing-page', component: LandingPage},
  { path: 'alerts', component: Alerts},
];
