import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-circular',
  standalone: false,
  template: `<h2 class="text-center text-primary">Circular Chart</h2>

    <div class="row">
      <div class="col">
        <canvas
          baseChart
          [data]="barChartData()"
          [type]="barChartType"
        ></canvas>
      </div>
    </div>`,
  styleUrl: './circular.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircularComponent {
  private readonly toast = inject(ToastrService);
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

  public barChartData = signal<ChartConfiguration['data']>({
    datasets: [
      {
        data: [50, 35, 80, 100, 20, 40, 60, 80],
        label: 'Ventas',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgb(250, 62, 5)',
      },
      {
        data: [50, 35, 80, 100, 20, 40, 60],
        label: 'Costo',
        borderColor: 'rgb(5, 62, 250)',
      },
    ],
    labels: this.months,
  });

  public barChartType: ChartType = 'doughnut';
  public barChartOptions: ChartConfiguration['options'] = {
    elements: {},
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y: {
        position: 'right',
      },
    },
  };
}
