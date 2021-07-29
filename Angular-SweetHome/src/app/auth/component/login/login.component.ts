import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin !: FormGroup;
  errLogin: string = '';

  constructor(public authService: AuthService,
              private fb: FormBuilder,
              private route: Router,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]]
    })
  }

  submitLogin() {
    let data = this.formLogin?.value;
    this.authService.login(data).subscribe(res => {
      if (res.error) {
        this.errLogin = res.message
        this.toastr.success('Error!', 'Login Fail!')
        console.log(this.errLogin)
      } else {
        localStorage.setItem('token', res.access_token);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.changeIsLogin();
        this.changeUserLogin();
        this.route.navigate(['../home'])
      }
    })
  }

  changeIsLogin(){
    let isLogin = this.authService.isLogin()
    this.authService.changeIsLogin(isLogin);
  }

  changeUserLogin(){
    let user =  JSON.parse(<string>(localStorage.getItem('user')));
    return this.authService.changeUserLogin(user)
  }


  get email(){
    return this.formLogin?.get('email')
  }
  get password(){
    return this.formLogin?.get('password')
  }
}
