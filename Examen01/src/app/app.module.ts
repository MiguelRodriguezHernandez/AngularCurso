import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Grafica90sComponent } from './grafica90s/grafica90s.component';
import { Grafica2000sComponent } from './grafica2000s/grafica2000s.component';
import {ServicioPoblacion90sService} from './services/servicio-poblacion90s.service';
import {ServicioPoblacion2000sService} from './services/servicio-poblacion2000s.service';


@NgModule({
  declarations: [
    AppComponent,
    Grafica2000sComponent,
    Grafica90sComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [ServicioPoblacion90sService, ServicioPoblacion2000sService],
  bootstrap: [AppComponent]
})
export class AppModule { }
