import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { ServicioPoblacion90sService } from '../services/servicio-poblacion90s.service'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-grafica90s',
  templateUrl: './grafica90s.component.html',
  styleUrls: ['./grafica90s.component.css']
})
export class Grafica90sComponent implements OnInit {
  ngOnInit() {
  }

  public pieChartLabels:string[] = ['Mujeres', 'Hombres'];
  public pieChartData:number[] = [0, 0];
  public pieChartType:string = 'pie';
  public lineChartLabels:Array<any> = ['1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999'];

  constructor(private poblacionService:ServicioPoblacion90sService) {
    let pieChartData:number[] = [0, 0];
    this.lineChartLabels.forEach((año, index) => {
      this.poblacionService.getPoblaciondeMexicoPorAño(año).subscribe(res => {
        pieChartData[0] += res['females'];
        pieChartData[1] += res['males'];
        this.pieChartData = pieChartData;
      });
      
    });}
   
  }
