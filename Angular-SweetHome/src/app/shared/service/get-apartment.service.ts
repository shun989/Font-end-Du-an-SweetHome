import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetApartmentService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient) { }

  getApartmentOFUser(){
    return this.http.get<any>(environment.ApiUrl + '/apartment/user')
      .pipe(map((res: any)=>{
        return res;
      }))
  }

  getListOfUser(id: number):Observable<any> {
    return this.http.get(environment.ApiUrl + '/apartment/' + id + '/list-of-user')
  }

}
