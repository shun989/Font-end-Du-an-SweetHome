import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  // @ts-ignore
  requestBooking(): Observable<any> {
    // return this.http.post(environment.ApiUrl + '');
  }
}
