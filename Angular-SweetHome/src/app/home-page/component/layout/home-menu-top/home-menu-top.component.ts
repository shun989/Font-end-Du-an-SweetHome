import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../auth/service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-menu-top',
  templateUrl: './home-menu-top.component.html',
  styleUrls: ['./home-menu-top.component.css']
})
export class HomeMenuTopComponent implements OnInit {

  isLogin: boolean | undefined;
  user: any;
  constructor(public authService : AuthService,
              private router: Router)
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
    }
    console.log(this.user.username)
  }

  logout():void {
    this.authService.logout().subscribe(res => {
      console.log(res)
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.router.navigate(['../home'])
      this.checkLogin();
    });
  }

}
