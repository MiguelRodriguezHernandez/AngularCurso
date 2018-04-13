import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PeticionPostService {

  constructor(private http: HttpClient) { }
  posrUrl = "http://192.168.1.166:8090/add_user";

peticionPost(data : any):Observable<any>
{
  return this.http.post(this.posrUrl, data);
}
}
