import { afterNextRender, Component, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth';

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
    private authService: AuthService
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

  onLogin(): void {
    this.router.navigate(['/dealer-login']);
    // this.authService.login(this.email, this.password)
    //   .then(() => {
    //     console.log("Login successful");
    //   })
    //   .catch(err => {
    //     this.errorMsg = err.message;
    //   });

    this.authService.login(this.email, this.password)
    .then(() => {
      console.log("Login successful");
    })
    .catch(err => {
      console.log(err.code);
      console.log(err.message);
    });

  // this.authService.register(this.email, this.password)
  //   .then((userCredential) => {
  //     console.log("User created:", userCredential.user);

  //     // redirect after signup
  //     this.router.navigate(['/login']);
  //   })
  //   .catch(err => {
  //     console.log(err.message);
  //   });

  }

  onContinue(): void{
    this.router.navigate(['/vecv-login']);
  }

  onChange(event: string): void {
    this.selectedRole = event;
    this.mobileError = '';
  }

  userIdControl = new FormControl('',[
    Validators.required,
  ])

  passwordControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[A-Za-z0-9@$!%*?&]{6,}$')
  ])
  email = '';
  password = '';
  errorMsg = '';

}

