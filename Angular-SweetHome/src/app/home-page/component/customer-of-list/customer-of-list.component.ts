import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApartmentService} from "../../../service/apartment.service";
import {Apartment} from "../../../shared/model/apartment";
import {AuthService} from "../../../auth/service/auth.service";


@Component({
  selector: 'app-customer-of-list',
  templateUrl: './customer-of-list.component.html',
  styleUrls: ['./customer-of-list.component.css']
})
export class CustomerOfListComponent implements OnInit {

  apartments: any;
  user: any;

  constructor(private route: ActivatedRoute,
              private apartmentService: ApartmentService,
              public authService : AuthService,) {
  }

  ngOnInit(): void {
    this.authService.currentUserLogin.subscribe(user => this.user = user);
    this.getUserLogin()
    // @ts-ignore
    let id = +this.route.snapshot.paramMap.get('id');
    this.getListOfCustomer(id)
  }

  getUserLogin():void {
    if(this.authService.isLogin()) {
      this.user = JSON.parse(<string>(localStorage.getItem('user')));
      // console.log(this.user)
    }
  }

  getListOfCustomer(id: number) {
    this.apartmentService.getListOfCustomer(id).subscribe((data) => {
      this.apartments = data;
      console.log(data)
    })
  }

}
