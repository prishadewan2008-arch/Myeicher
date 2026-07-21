import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-fleet-utilisation-card',
  imports: [BaseChartDirective],
  templateUrl: './fleet-utilisation-card.html',
  styleUrl: './fleet-utilisation-card.css',
})
export class FleetUtilisationCard {

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May'
    ],
    datasets: [
      {
        label: 'Kms covered',
        data: [15, 30, 45, 75, 100]
      }
    ]
  };
  
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
  };
}
