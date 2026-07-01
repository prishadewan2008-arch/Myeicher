import {
  afterNextRender,
  ChangeDetectorRef,
  Component,
  inject,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule, CommonModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage implements OnDestroy {
  private readonly cdr = inject(ChangeDetectorRef);

  selectedRole = 'Customer';
  currentIndex = 0;
  prevIndex = 0;

  images = [
    'assets/bg1.svg',
    'assets/bg2.svg',
    'assets/bg3.svg',
    'assets/bg4.svg',
    'assets/bg5.svg',
  ];

  private intervalId?: ReturnType<typeof setInterval>;

  constructor() {
    afterNextRender(() => {
      this.intervalId = setInterval(() => {
        this.nextSlide();
        this.cdr.detectChanges();
      }, 3000);
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }  nextSlide(): void {
    this.prevIndex = this.currentIndex;
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  getSlideClass(index: number): string {
    if (index === this.currentIndex) {
      return 'active';
    }
    if (index === this.prevIndex && this.prevIndex !== this.currentIndex) {
      return 'prev';
    }
    return 'hidden';
  }

  onChange(event: string): void {
    this.selectedRole = event;
    console.log(event);
  }
}
