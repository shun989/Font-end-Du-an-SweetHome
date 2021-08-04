import {Component, OnInit, Pipe} from '@angular/core';
import {Apartment} from "../../../shared/model/apartment";
import {ApartmentService} from "../../../service/apartment.service";

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})

export class PageListComponent implements OnInit {
  apartments: Apartment[] = [];
  // @ts-ignore
  @Pipe({name:'split'})

  constructor(private apartmentService: ApartmentService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.apartmentService.getAll().subscribe((data) => {
      this.apartments = data;
      console.log(data)
    })
  }

}
