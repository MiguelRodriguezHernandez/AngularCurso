import { Component } from '@angular/core';
import { Grafica90sComponent } from './grafica90s/grafica90s.component';
import { Grafica2000sComponent } from './grafica2000s/grafica2000s.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = true;

  Oculta(i:boolean)
  {
    if(i)
    this.count = false;
    else
    this.count = true;
  }
}


