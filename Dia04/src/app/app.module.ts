import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PoblacionMexicoService } from './services/poblacion-mexico.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [PoblacionMexicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
