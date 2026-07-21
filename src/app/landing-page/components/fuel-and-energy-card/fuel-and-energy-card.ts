import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-fuel-and-energy-card',
  imports: [BaseChartDirective],
  templateUrl: './fuel-and-energy-card.html',
  styleUrl: './fuel-and-energy-card.css',
})
export class FuelAndEnergyCard {
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
   responsive: true,
   maintainAspectRatio: false,
  };
  
  public barChartFuel: ChartConfiguration<'bar'>['data'] = {
    labels: [
      'May',
      'June',
      'July',
      'August',
      'September'
    ],
    datasets: [
      {
        label: 'Mileage',
        data: [20, 10, 15, 8, 9]
      }
    ]
  };

activeMenu = 'Diesel';

setActive(menu: string) {
  this.activeMenu = menu;
}
}
