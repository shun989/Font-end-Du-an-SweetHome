import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApartmentService} from "../../../service/apartment.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  apartment: any;
  category: any;

  constructor(private route: ActivatedRoute,
              private apartmentService: ApartmentService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    let id = +this.route.snapshot.paramMap.get('id');
    this.getById(id)
  }

  getById(id: number) {
    this.apartmentService.getById(id).subscribe((data) => {
      this.apartment = data
      console.log(data)
    });
  }

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
}
