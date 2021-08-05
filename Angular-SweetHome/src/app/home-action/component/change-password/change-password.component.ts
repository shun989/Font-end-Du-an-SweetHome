import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../auth/service/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm?: FormGroup;
  message?: string;
  errPassword?: string;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private toastr: ToastrService) {
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
        this.errPassword = res.message
      }
    }, (error: any) => console.log(error));
  }

  get password(){
    return this.changePasswordForm?.get('password')
  }

  get passwordConfirmation(){
    return this.changePasswordForm?.get('passwordConfirmation')
  }
}
