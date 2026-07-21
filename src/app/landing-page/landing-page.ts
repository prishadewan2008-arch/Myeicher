import { Component, OnInit, afterNextRender, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { CollapsibleCard } from './components/collapsible-card/collapsible-card';
import { FleetUtilisationCard } from './components/fleet-utilisation-card/fleet-utilisation-card';
import { FuelAndEnergyCard } from './components/fuel-and-energy-card/fuel-and-energy-card';
import { HeroBanner } from './components/hero-banner/hero-banner';
import { TrackingCard } from './components/tracking-card/tracking-card';
import { UptimeCard } from './components/uptime-card/uptime-card';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule, BaseChartDirective, 
    CollapsibleCard, FleetUtilisationCard, FuelAndEnergyCard, HeroBanner, TrackingCard, UptimeCard],
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

//   public barChartData: ChartConfiguration<'bar'>['data'] = {
//   labels: [
//     'Jan',
//     'Feb',
//     'Mar',
//     'Apr',
//     'May'
//   ],
//   datasets: [
//     {
//       label: 'Kms covered',
//       data: [15, 30, 45, 75, 100]
//     }
//   ]
// };

// public barChartOptions: ChartConfiguration<'bar'>['options'] = {
//   responsive: true,
//   maintainAspectRatio: false,
// };

// public barChartFuel: ChartConfiguration<'bar'>['data'] = {
//   labels: [
//     'May',
//     'June',
//     'July',
//     'August',
//     'September'
//   ],
//   datasets: [
//     {
//       label: 'Mileage',
//       data: [20, 10, 15, 8, 9]
//     }
//   ]
// };
// isOpen = false;

// activeMenu = 'Diesel';

// setActive(menu: string) {
//   this.activeMenu = menu;
// }

}