import { Component, OnInit } from '@angular/core';
import {GetApartmentService} from "../../../shared/service/get-apartment.service";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../../auth/service/auth.service";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  apartments : any;
  user: any;

  constructor(private getApartmentService: GetApartmentService,
              private route: ActivatedRoute,
              public authService : AuthService,) { }

  ngOnInit(): void {
    this.authService.currentUserLogin.subscribe(user => this.user = user);
    this.getUserLogin()
    // @ts-ignore
    let id = +this.route.snapshot.paramMap.get('id');
    this.getApartOfUser(id);
  }

  getUserLogin():void {
    if(this.authService.isLogin()) {
      this.user = JSON.parse(<string>(localStorage.getItem('user')));
      // console.log(this.user)
    }
  }

  getApartOfUser(id: number) {
    this.getApartmentService.getListOfUser(id).subscribe((data) => {
      this.apartments = data;
      console.log(data)
    })
  }

}
