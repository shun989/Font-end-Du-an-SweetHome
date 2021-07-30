import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  apartmentUrl = "http://localhost:8000/api/apartment";

  constructor(private http: HttpClient) { }
  getAllApartment() {
    return this.http.get<any>(this.apartmentUrl)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  postApartment(data: any) {
    let token = localStorage.getItem('token');
    let headers_object = new HttpHeaders().set('Authorization', 'Bearer' + token);
    let httpOptions = { headers: headers_object };
    return this.http.post<any>(this.apartmentUrl, data, httpOptions)

      .pipe(map((res: any) => {
        console.log(res)
        return res
      }))
  }
  deleteApartment(id: number): Observable<any> {
    let token = localStorage.getItem('token');
    let headers_object = new HttpHeaders().set('Authorization', 'Bearer' + token);
    let httpOptions = {
      headers: headers_object
    };
    const url = `${this.apartmentUrl}/${id}`;
    // @ts-ignore
    return this.http.delete<any>(url, this.httpOptions, httpOptions).pipe();
  }

  updateApartment(item: any, id: number): Observable<any> {
    let token = localStorage.getItem('token');
    let headers_object = new HttpHeaders().set('Authorization', 'Bearer' + token);
    let httpOptions = {
      headers: headers_object
    };
    const url = `${this.apartmentUrl}/${id}`;
    // @ts-ignore
    return this.http.put(url, item, this.httpOptions, httpOptions).pipe();
  }
  addApartment(apartment: object): void {
    let token = localStorage.getItem('token');
    let headers_object = new HttpHeaders().set('Authorization', 'Bearer' + token);
    let httpOptions = {
      headers: headers_object
    };

    this.http.post<any>('http://127.0.0.1:8000/api/apartment/add-apartment', apartment, httpOptions).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
