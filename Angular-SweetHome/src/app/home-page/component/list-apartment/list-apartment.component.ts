import { Component, OnInit } from '@angular/core';
import {ApartmentService} from "../../../service/apartment.service";
import {Apartment} from "../../../shared/model/apartment";

@Component({
  selector: 'app-list-apartment',
  templateUrl: './list-apartment.component.html',
  styleUrls: ['./list-apartment.component.css']
})
export class ListApartmentComponent implements OnInit {

  apartment: Apartment[] = [];

  constructor(private apartmentService: ApartmentService) { }

  ngOnInit(): void {
  }

}
