import { afterNextRender, Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-banner',
  imports: [],
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.css',
})
export class HeroBanner {
  currentIndex = signal(0);
  prevIndex = signal(0);

  images = [
    'assets/truck2_portal.svg',
    'assets/truck1_portal.svg',
    'assets/truck3_portal.svg',
  ];

  private intervalId?: ReturnType<typeof setInterval>;

  constructor(private router: Router) {
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

  updates(){
    console.log('navigate')
    this.router.navigate(['/app-view-updates']);
  }
}
