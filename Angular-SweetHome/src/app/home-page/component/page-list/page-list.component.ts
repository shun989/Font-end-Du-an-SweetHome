import {Component, OnInit, Pipe} from '@angular/core';
import {Apartment} from "../../../shared/model/apartment";
import {ApartmentService} from "../../../service/apartment.service";
import {LocationService} from "../../../shared/service/location.service";

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})

export class PageListComponent implements OnInit {
  apartments: Apartment[] = [];
  // @ts-ignore
  @Pipe({name:'split'})
  filterTerm!: string;
  categories: any;


  constructor(private apartmentService: ApartmentService,
              private locationService: LocationService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.apartmentService.getAll().subscribe((data) => {
      this.apartments = data;
      // console.log(data)
    })
  }

  getAllCategory(){
    this.locationService.getCategory().subscribe(res =>{
      this.categories = res;
      console.log(this.categories);
    })
  }

}
