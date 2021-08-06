import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../auth/service/auth.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {Message} from "../../../shared/model/message";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm?: FormGroup;
  message?: string;
  errPassword?: string;
  mess?: Message;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private toastr: ToastrService,
              private router: Router) {
  }


  ngOnInit(): void {
    this.changePasswordForm = this.fb.group({
      current_password: [''],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(8)]],
      password_confirmation: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(8)]],
    });
  }

  onSubmit() {
    let data = this.changePasswordForm?.value;
    this.authService.changePassword(data).subscribe((res: any) => {
      if (res.error) {
        this.mess = res.message
        this.toastr.error('Error', this.message)
        console.log(this.mess)
      }
    }, (error) =>{
      this.mess = error.error
      this.toastr.error('Error', this.message)
      console.log(this.mess)
    });
    this.toastr.success('Success', 'Đổi mật khẩu thành công.')
    this.router.navigate(['action/profile'])

  }

  get password(){
    return this.changePasswordForm?.get('password')
  }

  get passwordConfirmation(){
    return this.changePasswordForm?.get('passwordConfirmation')
  }
}
