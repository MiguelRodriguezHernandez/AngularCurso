import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ServicioGasolinaService} from './servicios/servicio-gasolina.service';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [ServicioGasolinaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
