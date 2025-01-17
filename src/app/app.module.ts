import {
  NgModule,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterLink } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import {
  CircularComponent,
  NavbarComponent,
  LineComponent,
  BarComponent,
} from '@Components/';
//*ng2-charts - chart.js Angular
import {
  BaseChartDirective,
  provideCharts,
  withDefaultRegisterables,
} from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    CircularComponent,
    NavbarComponent,
    LineComponent,
    BarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseChartDirective,
    RouterLink,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      timeOut: 3000,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true,
    }),
  ],
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideHttpClient(),
    provideAnimations(),
    provideCharts(withDefaultRegisterables()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
