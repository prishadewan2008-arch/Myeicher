import { afterNextRender, Component, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage implements OnDestroy {
  selectedRole = 'Customer';
  mobileNumber = '';
  mobileError = '';
  currentIndex = signal(0);
  prevIndex = signal(0);

  images = [
    'assets/bg1.svg',
    'assets/bg2.svg',
    'assets/bg3.svg',
    'assets/bg4.svg',
    'assets/bg5.svg',
  ];

  private intervalId?: ReturnType<typeof setInterval>;

  constructor(
    private router: Router,
    private authService: AuthService,
    private http: HttpClient
  ) {
    afterNextRender(() => {
      this.intervalId = setInterval(() => this.nextSlide(), 3000);
    });
  }


  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  nextSlide(): void {
    this.prevIndex.set(this.currentIndex());
    this.currentIndex.update((index) => (index + 1) % this.images.length);
  }

  onProceed(): void {
    const mobile = this.mobileNumber.trim();

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      this.mobileError = 'Enter a valid 10-digit mobile number.';
      return;
    }

    this.mobileError = '';
    this.router.navigate(['/customer-login'], { state: { mobile } });
  }

  showErrorPopup = false;

  onLogin(): void {
    const email = this.userIdControl.value?.trim() ?? '';
    const password = this.passwordControl.value ?? '';

    this.errorMsg = '';

    if (!email || !password) {
      this.errorMsg = 'Please enter User ID and password.';
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      this.errorMsg =
        'Firebase login requires an email address (e.g. dealer@example.com), not a plain User ID.';
      return;
    }

    this.authService.login(
    email,
    password,
    this.selectedRole
  )
  .then(() => {

    console.log("Login successful");

    if(this.selectedRole === 'Dealer') {
      this.router.navigate(['/dealer-login']);
    }

    else if(this.selectedRole === 'customer') {
      this.router.navigate(['/customer-login']);
    }

    else if(this.selectedRole === 'vecv') {
      this.router.navigate(['/vecv-login']);
    }

  })
      .catch((err: { code?: string; message?: string }) => {
        if (
          err.code === 'auth/invalid-credential' ||
          err.code === 'auth/user-not-found' ||
          err.code === 'auth/wrong-password'
        ) {
          this.showErrorPopup = true;
        }
        
        console.log(err.message);
    this.errorMsg = err.message || 'Login failed.';
      });
  }

  private getAuthErrorMessage(code: string): string {
    switch (code) {
      case 'auth/invalid-email':
        return 'Invalid email format.';
      case 'auth/invalid-credential':
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        return 'Wrong email or password. Create this user in Firebase Console first.';
      case 'auth/operation-not-allowed':
        return 'Email/Password sign-in is disabled. Enable it in Firebase Console → Authentication → Sign-in method.';
      case 'auth/too-many-requests':
        return 'Too many attempts. Wait a few minutes and try again.';
      default:
        return `Login failed (${code || 'unknown error'}).`;
    }
  }

  onContinue(): void {
    this.router.navigate(['/vecv-login']);
  }

  onChange(event: string): void {
    this.selectedRole = event;
    this.mobileError = '';
  }

  userIdControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[A-Za-z0-9@$!%*?&]{6,}$'),
  ]);

  errorMsg = '';

  onOK(): void {
    this.router.navigate(['/dealer-login']);
  }
}

