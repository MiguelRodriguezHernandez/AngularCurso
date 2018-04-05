import { Component } from '@angular/core';
import {ServicioGasolinaService} from './servicios/servicio-gasolina.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Post} from './post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  posts : Post[] = [];
  constructor(private http: HttpClient,
              private service: ServicioGasolinaService)
              {
                this.service.PeticionGasolina().subscribe((res)=>{
                  this.posts = res;
                })
              }    
  ID(i:number)
  {
    console.log(this.posts[i].id);
  }
            
  }

