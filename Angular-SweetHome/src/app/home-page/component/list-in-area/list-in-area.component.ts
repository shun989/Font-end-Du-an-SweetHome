import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../../service/home.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list-in-area',
  templateUrl: './list-in-area.component.html',
  styleUrls: ['./list-in-area.component.css']
})
export class ListInAreaComponent implements OnInit {
  count!: number;
  result: any;
  constructor(private homeService: HomeService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // @ts-ignore
    let code = this.route.snapshot.paramMap.get('code');
    this.getAreaApartment(code);
  }

  getAreaApartment(code: any) {
    this.homeService.getAreaApartment(code).subscribe((res) => {
      this.result = res
      console.log(this.result[0])
    })
  }
}
