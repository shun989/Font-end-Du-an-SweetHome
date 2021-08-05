import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserActionService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  message: string | undefined;
  constructor(private http: HttpClient,
              private toastr: ToastrService,
              private route: Router,) { }


  updateUser(id: any):void{
    let token = localStorage.getItem('token');
    let headers_object = new HttpHeaders().set('Authorization', 'Bearer' + token);
    let httpOptions = {
      headers: headers_object
    };
    this.http.put<any>(environment.ApiUrl + '/update-profile/' + id, httpOptions).subscribe(
      (res) =>{
        this.message = res.message
        this.toastr.success('Success', this.message)
        console.log(res)
        this.route.navigate(['action/profile'])
      }, error=>{
        this.toastr.error('Error', this.message)
        console.log(error)
      }
    );
  }

  uploadAvatar(avatar:object):void{
    let token = localStorage.getItem('token');
    let headers_object = new HttpHeaders().set('Authorization', 'Bearer' + token);
    let httpOptions = {
      headers: headers_object
    };
    this.http.post<any>(environment.ApiUrl + '/avatar/create', avatar, httpOptions).subscribe(
      (res) =>{
        this.message = res.message
        this.toastr.success('Success', this.message)
        console.log(res)
        // this.route.navigate(['action/user-list'])
      }, error=>{
        this.toastr.error('Error', this.message)
        console.log(error)
      }
    );
  }


}
