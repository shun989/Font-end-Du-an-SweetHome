import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../auth/service/auth.service";
import {NavigationExtras, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-home-menu-top',
  templateUrl: './home-menu-top.component.html',
  styleUrls: ['./home-menu-top.component.css']
})
export class HomeMenuTopComponent implements OnInit {

  isLogin: boolean | undefined;
  user: any;

  constructor(public authService : AuthService,
              private router: Router,
              private toastr: ToastrService)
  { }

  ngOnInit(): void {
    this.authService.currentLogin.subscribe(isLogin => this.isLogin = isLogin);
    this.authService.currentUserLogin.subscribe(user => this.user = user);
    this.checkLogin();
    this.getUserLogin()
  }

  checkLogin():void {
    this.isLogin = this.authService.isLogin();
  }

  getUserLogin():void {
    if(this.authService.isLogin()) {
      this.user = JSON.parse(<string>(localStorage.getItem('user')));
      // console.log(this.user)
    }
  }

  logout():void {
    this.authService.logout().subscribe(res => {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      this.checkLogin();
      this.toastr.success('Success', 'Bạn đã đăng xuất thành công.')
      this.router.navigate(['account/login']);
    });
  }

}
