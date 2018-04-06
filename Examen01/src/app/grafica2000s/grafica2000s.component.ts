import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { ServicioPoblacion2000sService } from '../services/servicio-poblacion2000s.service'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-grafica2000s',
  templateUrl: './grafica2000s.component.html',
  styleUrls: ['./grafica2000s.component.css']
})
export class Grafica2000sComponent implements OnInit {
  ngOnInit() {
  }

  public pieChartLabels:string[] = ['Mujeres', 'Hombres'];
  public pieChartData:number[] = [0, 0];
  public pieChartType:string = 'pie';
  public lineChartLabels:Array<any> = ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009'];

  constructor(private poblacionService:ServicioPoblacion2000sService) {
    let pieChartData:number[] = [0, 0];
    this.lineChartLabels.forEach((año, index) => {
      this.poblacionService.getPoblaciondeMexicoPorAño(año).subscribe(res => {
        pieChartData[0] += res['females'];
        pieChartData[1] += res['males'];
        this.pieChartData = pieChartData;
      });
      
    });}
   
  }
