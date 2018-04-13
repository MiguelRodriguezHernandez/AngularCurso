import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  xForm : FormGroup;
  Nombres = [];
  MASCULINO = [];
  FEMENINO = [];
  i : Number;
  bandera : boolean;


  public pieChartLabels:string[] = ['FEMENINO', 'MASCULINO'];
  public pieChartData:number[] = [0, 0];
  public pieChartType:string = 'pie';


  constructor(private form : FormBuilder) { }
  ngOnInit() {
    this.xForm = this.form.group({
      'nombres' : [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-ZñÑáéíóúÁÉÍÓÚ_ ]+")])],
      'edad' : [null, Validators.compose([Validators.required, Validators.pattern("[0-9]*"), Validators.min(18), Validators.max(70)])],
      'genero' : [null, Validators.required]
    })
  }
  Enviar(){
    this.bandera = true;

    if(this.Nombres.length > 0)
    {
      this.Nombres.forEach(value =>{
        if(this.Nombres[value] === this.xForm.get('nombres').value)
        this.bandera = false;
      });
    }
    if(this.bandera)
    {
      this.Nombres.push(this.xForm.get('nombres').value);
      if(this.xForm.get('genero').value === 'FEMENINO')
      this.FEMENINO.push(this.xForm.get('genero').value);
      else
      this.MASCULINO.push(this.xForm.get('genero').value);

      console.log(this.Nombres, this.MASCULINO, this.FEMENINO);
      this.Actualiza();
    }
    
  }

  Actualiza()
{
  let pieChartData:number[] = [0, 0];
  pieChartData[0] = this.FEMENINO.length;
  pieChartData[1] = this.MASCULINO.length;
  this.pieChartData = pieChartData;

}  

ValidaNombre()
{
  if(this.Nombres.length > 0)
    {
      this.Nombres.forEach(value =>{
        if(this.Nombres[value] === this.xForm.get('nombres').value)
        return true;
      });
    }
  return false;
}
  
}
