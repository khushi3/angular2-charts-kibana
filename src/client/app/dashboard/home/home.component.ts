import { Component } from '@angular/core';

/**
*	This class represents the lazy loaded HomeComponent.
*/
import {TrafficChartService} from './trafficChart.service';


@Component({
	moduleId: module.id,
	selector: 'home-cmp',
	templateUrl: 'home.component.html',
  styleUrls: ['home.css']

})

export class HomeComponent {
	public doughnutData: Array<Object>;
  public totalCount: any;

  constructor(private trafficChartService:TrafficChartService) {

   this.trafficChartService.getData().subscribe(data => {
      this.doughnutData = data.statusChartValues;
      this.totalCount = data.total;
      this._loadDoughnutCharts();
    }, error => console.log('Could not load List of Service'));
   
  }

 

  private _loadDoughnutCharts() {
  console.log('sec 3' +this.doughnutData);
    // let el = jQuery('.chart-area').get(0);
    // new Chart(el.getContext('2d')).Doughnut(this.doughnutData, {
    //   segmentShowStroke: false,
    //   percentageInnerCutout : 64,
    //   responsive: true
    // });
  }
}
