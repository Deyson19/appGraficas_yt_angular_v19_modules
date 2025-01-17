import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-graficas-line',
  standalone: false,
  templateUrl: './line.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LineComponent {
  //*Gráfica de ventas por meses
  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
  ];

  public lineChartData = signal<ChartConfiguration['data']>({
    datasets: [
      {
        data: [50, 35, 80, 100, 20, 40, 60, 80],
        label: 'Ventas',
        fill: 'origin',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
      },
      {
        data: [20, 15, 40, 50, 10, 30, 40, 50],
        label: 'Costo',
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
      },
    ],
    labels: this.months,
  });

  public lineChartType: ChartType = 'line';
  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y: {
        position: 'left',
      },
      y1: {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red',
        },
      },
    },
  };
}
