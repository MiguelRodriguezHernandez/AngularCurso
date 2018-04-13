import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { GraficaComponent } from './grafica/grafica.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    GraficaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ChartsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
