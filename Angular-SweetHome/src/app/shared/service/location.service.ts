import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LocationService {


  constructor(private http: HttpClient) { }

  getProvinces(){
    return this.http.get<any>(environment.ApiUrl + '/province')
      .pipe(map((res: any)=>{
        return res;
      }))
  }

  getProvince(id: any){
    return this.http.get<any>(environment.ApiUrl + '/province/' + id)
      .pipe(map((res: any)=>{
        return res;
      }))
  }

  getDistricts(){
    return this.http.get<any>(environment.ApiUrl + '/district')
      .pipe(map((res: any)=>{
        return res;
      }))
  }

  getDistrict(id: any){
    return this.http.get<any>(environment.ApiUrl + '/district/' + id)
      .pipe(map((res: any)=>{
        return res;
      }))
  }

  getWards(){
    return this.http.get<any>(environment.ApiUrl + '/ward')
      .pipe(map((res: any)=>{
        return res;
      }))
  }

  getWard(id: any){
    return this.http.get<any>(environment.ApiUrl + '/ward/' + id)
      .pipe(map((res: any)=>{
        return res;
      }))
  }

  getCategory(){
    return this.http.get<any>(environment.ApiUrl + '/category')
      .pipe(map((res:any)=>{
        return res;
      }))
  }

  getStatus(){
    return this.http.get<any>(environment.ApiUrl + '/status')
      .pipe(map((res:any)=>{
        return res;
      }))
  }
}
