import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from '@Components/graficas/bar/bar.component';
import { CircularComponent } from '@Components/graficas/circular/circular.component';
import { LineComponent } from '@Components/graficas/line/line.component';

const routes: Routes = [
  {
    path: 'home',
    loadComponent: async () => {
      const m = await import('@Pages/layout/layout.component');
      return m.default;
    },
  },
  {
    path: 'circular-chart',
    component: CircularComponent,
  },
  {
    path: 'line-chart',
    component: LineComponent,
  },
  {
    path: 'bar-chart',
    component: BarComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
