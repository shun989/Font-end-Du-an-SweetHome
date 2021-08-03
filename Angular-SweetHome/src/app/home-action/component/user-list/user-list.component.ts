import { Component, OnInit } from '@angular/core';
import {GetApartmentService} from "../../../shared/service/get-apartment.service";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  apartments : any;
  constructor(private getApartmentService: GetApartmentService) { }

  ngOnInit(): void {
    this.getApartOfUser();
  }

  getApartOfUser(){
    let token =localStorage.getItem('token');
    let headers_object = new HttpHeaders().set('Authorization', 'Bearer' + token);
    let httpOptions = {headers: headers_object};
    this.getApartmentService.getApartmentOFUser().subscribe(res => {
      this.apartments = res;
      console.log(this.apartments)
    })
  }



}
