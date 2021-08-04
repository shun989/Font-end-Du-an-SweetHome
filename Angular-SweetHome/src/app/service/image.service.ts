import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {map} from "rxjs/operators";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  message: string | undefined;

  constructor(private http: HttpClient,
              private toastr: ToastrService,
              private route: Router) {
  }

  getImages(){
    return this.http.get<any>(environment.ApiUrl + '/image')
      .pipe(map((res:any)=>{
        return res;
      }));
  }

  // uploadImg(data: any) {
  //   let token = localStorage.getItem('token');
  //   let headers_object = new HttpHeaders().set('Authorization', 'Bearer' + token);
  //   let httpOptions = {headers: headers_object};
  //   return this.http.post<any>(environment.ApiUrl + '/image/upload', data, httpOptions)
  //     .subscribe((res) => {
  //         this.message = res.message
  //         this.toastr.success('Success', this.message)
  //         console.log(res)
  //         this.route.navigate(['action/user-list'])
  //       },
  //         error => {
  //         this.toastr.error('Error', this.message)
  //         console.log(error)
  //       });
  // }

  uploadImg(image:object):void{
    let token = localStorage.getItem('token');
    let headers_object = new HttpHeaders().set('Authorization', 'Bearer' + token);
    let httpOptions = {
      headers: headers_object
    };
    this.http.post<any>(environment.ApiUrl + '/image/upload', image, httpOptions).subscribe(
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
