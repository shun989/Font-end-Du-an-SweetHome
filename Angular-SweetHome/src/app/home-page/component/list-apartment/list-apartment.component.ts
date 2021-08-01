import {Component, OnInit} from '@angular/core';
import {ApartmentService} from "../../../service/apartment.service";
import {Apartment} from "../../../shared/model/apartment";
import {Category} from "../../../shared/model/category";
import {User} from "../../../shared/model/user";


@Component({
  selector: 'app-list-apartment',
  templateUrl: './list-apartment.component.html',
  styleUrls: ['./list-apartment.component.css']
})
export class ListApartmentComponent implements OnInit {

  apartments: Apartment[] = [];
  category: Category[] = [];
  user: User[] = [];

  constructor(private apartmentService: ApartmentService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.apartmentService.getAll().subscribe((data) => {
      // console.log(data)
      this.apartments = data;
      console.log(data)
      // this.category = data.category;
      // this.user = data.use;
    })
  }
}
