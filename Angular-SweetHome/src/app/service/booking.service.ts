import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {differenceInYears, differenceInMonths, differenceInDays, addYears, addMonths} from 'date-fns';
import {Booking} from "../shared/model/booking";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) {
  }

  // @ts-ignore
  requestBooking(booking: Booking): Observable<any> {
    let token = localStorage.getItem('token');
    let headers_object = new HttpHeaders().set('Authorization', 'Bearer' + token);
    let httpOptions = {
      headers: headers_object
    };
    return this.http.post<any>(environment.ApiUrl + '/booking/create', booking, httpOptions);
  }

  getBookmarked(id: number) {
    let token = localStorage.getItem('token');
    let headers_object = new HttpHeaders().set('Authorization', 'Bearer' + token);
    let httpOptions = {
      headers: headers_object
    };
    return this.http.get(environment.ApiUrl + '/booking/' + id, httpOptions)
  }
}
