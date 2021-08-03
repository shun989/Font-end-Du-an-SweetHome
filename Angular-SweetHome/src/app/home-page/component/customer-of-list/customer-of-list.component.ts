import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApartmentService} from "../../../service/apartment.service";

@Component({
  selector: 'app-customer-of-list',
  templateUrl: './customer-of-list.component.html',
  styleUrls: ['./customer-of-list.component.css']
})
export class CustomerOfListComponent implements OnInit {
  apartments: any;

  constructor(private route: ActivatedRoute,
              private apartmentService: ApartmentService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    let id = +this.route.snapshot.paramMap.get('id');
    this.getListOfCustomer(id)
  }

  getListOfCustomer(id: number) {
    this.apartmentService.getListOfCustomer(id).subscribe((data) => {
      this.apartments = data;
      console.log(data)
    })
  }

}
