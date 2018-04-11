import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  xForm : FormGroup;

  constructor(private form : FormBuilder) { }
  ngOnInit() {
    this.xForm = this.form.group({
      'nombres' : [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-ZñÑáéíóúÁÉÍÓÚ_ ]+")])],
      'apellidoP' : [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-ZñÑáéíóúÁÉÍÓÚ_ ]+")])],
      'apellidoM' : [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-ZñÑáéíóúÁÉÍÓÚ_ ]+")])],
      'edad' : [null, Validators.compose([Validators.required, Validators.pattern("[0-9]*"), Validators.min(18), Validators.max(70)])],
      'email' : [null, Validators.compose([Validators.required, Validators.email])],
      'password' : [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      'genero' : [null, Validators.required]
    })
  }
Enviar(Data:FormGroup){
console.log(Data);
}
  // ngOnInit() {
  //   this.xForm = this.form.group({
  //     'name' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
  //     'email' : [null, Validators.compose([Validators.required, Validators.email])],
  //     'password' : [null, Validators.compose([Validators.required, Validators.minLength(6)])],
  //     'phone' : [null, Validators.compose([Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(8), Validators.maxLength(10)])],
  //     'gender' : [null, Validators.required]
  //   })
  // }

}
