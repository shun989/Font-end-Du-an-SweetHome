import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GetApartmentService {

  constructor(private http: HttpClient) { }

  getApartmentOFUser(){
    return this.http.get<any>(environment.ApiUrl + '/apartment/user')
      .pipe(map((res: any)=>{
        return res;
      }))
  }
}
