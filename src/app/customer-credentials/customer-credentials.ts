import { afterNextRender, Component, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-credentials',
  imports: [CommonModule, FormsModule],
  templateUrl: './customer-credentials.html',
  styleUrl: './customer-credentials.css',
})
export class CustomerCredentials implements OnDestroy {
  mobileNumber = '';
  username = '';
  password = '';
  errorMessage = '';

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

  constructor(private router: Router) {
    afterNextRender(() => {
      const mobile = history.state?.['mobile'] as string | undefined;
      if (!mobile) {
        this.router.navigate(['/']);
        return;
      }

      this.mobileNumber = mobile;
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

  onLogin(): void {
    if (!this.username.trim() || !this.password.trim()) {
      this.errorMessage = 'Please enter username and password.';
      return;
    }

    this.errorMessage = '';
    console.log('Customer login', {
      mobile: this.mobileNumber,
      username: this.username,
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
