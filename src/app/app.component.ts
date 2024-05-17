import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    DoughnutChartComponent,
    RadarChartComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-chartjs';
}
