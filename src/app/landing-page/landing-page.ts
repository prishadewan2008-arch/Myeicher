import { Component, OnInit, afterNextRender, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
  currentIndex = signal(0);
  prevIndex = signal(0);

  images = [
    'assets/truck2_portal.svg',
    'assets/truck1_portal.svg',
    'assets/truck3_portal.svg',
  ];

  private intervalId?: ReturnType<typeof setInterval>;

  constructor() {
    afterNextRender(() => {
      this.intervalId = setInterval(() => this.nextSlide(), 3000);
    })
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  nextSlide(): void {
    this.prevIndex.set(this.currentIndex())
    this.currentIndex.update((index) => (index + 1) % this.images.length);
  }
}