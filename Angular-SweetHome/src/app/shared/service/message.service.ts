import { Injectable } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private toastr: ToastrService) { }
  showSuccessWithTimeout(message: string | undefined, title: string | undefined, timespan: any) {
    this.toastr.success(message, title , {
      timeOut :  timespan
    });
  }
  showError(message: string | undefined, title: string | undefined) {
    this.toastr.error(message, title, {
      enableHtml :  true
    });
  }
}
