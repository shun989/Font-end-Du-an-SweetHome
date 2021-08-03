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

  error_message = {
    'password': [
      {type: 'required', message: 'Password is required'},
      {type: 'minlength', message: 'Password is too low!'},
      {type: 'maxlength', message: 'Password must be between 6 and 8 charaters!'}
    ]
  };

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
    },{
      validators: this.passwordMatch.bind(this)
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

  passwordMatch(formGroup: FormGroup) {
    // @ts-ignore
    const {value: password} = formGroup.get('password');
    // @ts-ignore
    const {value: password_confirmation} = formGroup.get('passwordConfirmation');
    return password === password_confirmation ? null : {passwordNotMatch: true};
  }

  get password(){
    return this.changePasswordForm?.get('password')
  }

  get passwordConfirmation(){
    return this.changePasswordForm?.get('passwordConfirmation')
  }
}
