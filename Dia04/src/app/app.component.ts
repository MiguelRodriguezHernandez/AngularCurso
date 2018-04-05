import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { PoblacionMexicoService } from './services/poblacion-mexico.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public pieChartLabels:string[] = ['Mujeres', 'Hombres'];
  public pieChartData:number[] = [0, 0];
  public pieChartType:string = 'pie';
  public lineChartLabels:Array<any> = ['2010', '2011', '2012', '2013', '2014', '2015', '2016'];

  constructor(private poblacionService:PoblacionMexicoService) {
    let pieChartData:number[] = [0, 0];
    this.lineChartLabels.forEach((año, index) => {
      this.poblacionService.getPoblaciondeMexicoPorAño(año).subscribe(res => {
        pieChartData[0] += res['females'];
        pieChartData[1] += res['males'];
        this.pieChartData = pieChartData;
        console.log(this.pieChartData);
      });
      
    });

 
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
