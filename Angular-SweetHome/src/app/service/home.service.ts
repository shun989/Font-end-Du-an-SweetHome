import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getFeaturedApartment() {
    return this.http.get(environment.ApiUrl + '/home/featured')
  }

  getLastedApartment() {
    return this.http.get(environment.ApiUrl + '/home/lasted')
  }
}
