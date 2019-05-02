import { Component, Input, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut-graphic',
  templateUrl: './doughnut-graphic.component.html',
  styles: []
})
export class DoughnutGraphicComponent implements OnInit {
  @Input() doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];
  @Input() doughnutChartType: ChartType = 'doughnut';
  @Input() title: string = 'Title';
  constructor() { }

  ngOnInit() {
  }
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
