import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ApartmentActionService {
  apartmentUrl = environment.ApiUrl + '/apartment';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  message: string | undefined;
  user: any;
  constructor(private http: HttpClient,
              private toastr: ToastrService,
              private route: Router) {
  }

  addApartment(data: any) {
    let token = localStorage.getItem('token');
    let headers_object = new HttpHeaders().set('Authorization', 'Bearer' + token);
    let httpOptions = {headers: headers_object};
    return this.http.post<any>(this.apartmentUrl + '/add', data, httpOptions)

      .pipe(map((res: any) => {
        console.log(res)
        return res
      }))
  }

  createApartment(apartment: object): void {
    let token = localStorage.getItem('token');
    this.user = JSON.parse(<string>(localStorage.getItem('user')));

    let headers_object = new HttpHeaders().set('Authorization', 'Bearer' + token);
    let httpOptions = {
      headers: headers_object
    };
    this.http.post<any>(this.apartmentUrl + '/add', apartment, httpOptions).subscribe(
      (res) => {
        this.message = res.message
        this.toastr.success('Success', this.message)
        console.log(res)
        this.route.navigate(['/home/list-of-customer', this.user.id])
      }, error => {
        this.toastr.error('Error', this.message)
        console.log(error)
      }
    );
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
}
