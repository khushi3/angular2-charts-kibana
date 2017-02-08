import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TrafficChartService } from './trafficChart.service';


@NgModule({
    imports: [CommonModule, CarouselModule],
    declarations: [HomeComponent],

     providers: [
    TrafficChartService,
  ],

    exports: [HomeComponent]
})

export class HomeModule { }
