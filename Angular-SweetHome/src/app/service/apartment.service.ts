import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  constructor(private http: HttpClient) { }
  // @ts-ignore
  getAll(): Observable<any> {
    return this.http.get(environment.ApiUrl + '/apartment')
  }
  // @ts-ignore
  getById(id):Observable<any> {
    return this.http.get(environment.ApiUrl + '/apartment/' + id)
  }
}
