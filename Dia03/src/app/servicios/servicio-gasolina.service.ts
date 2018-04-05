import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Post} from '../post'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ServicioGasolinaService {

  constructor(private http:HttpClient) { }
PeticionGasolina():Observable<any>{
  let url:string = 'https://api.datos.gob.mx/v1/precio.gasolina.publico';
  return this.http.get(url).map(res => res['results'].map((res) => new Post(res['calle'],res['codigopostal'],res['razonsocial'],res['_id'])))
}
}
