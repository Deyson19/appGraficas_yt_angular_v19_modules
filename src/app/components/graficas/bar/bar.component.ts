import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-graficas-bar',
  standalone: false,
  template: `
    <h2 class="text-center text-primary">Bar Chart</h2>

    <div class="row">
      <div class="col">
        <canvas
          baseChart
          (chartHover)="chartHovered($event)"
          [data]="barChartData()"
          [options]="barChartOptions"
          [type]="barChartType"
        ></canvas>

        <button (click)="updateData()" class="btn btn-primary">
          Change Data
        </button>
      </div>
    </div>
  `,
  styleUrl: './bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarComponent {
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

  public barChartType: ChartType = 'bar';
  public barChartOptions: ChartConfiguration['options'] = {
    elements: {},
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
  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {}

  updateData() {
    this.toast.info('Se van a actualizar los datos...');
    this.barChartData.set({
      datasets: [
        this.barChartData().datasets[1], //Costo anterior
        {
          data: [40, 25, 20, 60, 30, 50, 80, 50],
          label: 'Costo, Actualizado',
          backgroundColor: 'rgba(190, 241, 5, 0.3)',
          borderColor: 'blue',
        },
      ],
    });
  }
}
