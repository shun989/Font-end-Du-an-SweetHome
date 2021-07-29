import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../auth/service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-action-menu-top',
  templateUrl: './action-menu-top.component.html',
  styleUrls: ['./action-menu-top.component.css']
})
export class ActionMenuTopComponent implements OnInit {


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
      this.checkLogin();
    });
    this.router.navigate(['#'])
  }
}
