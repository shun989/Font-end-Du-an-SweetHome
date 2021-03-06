import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../../service/home.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  featured: any;
  lasteds: any;
  count: any;

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.getFeatured();
    this.getLasted();
    this.getCountArea();
  }

  getFeatured() {
    this.homeService.getFeaturedApartment().subscribe((res) => {
      this.featured = res
    })
  }

  getLasted() {
    this.homeService.getLastedApartment().subscribe((res) => {
      this.lasteds = res
      console.log(res)
    })
  }

  getCountArea() {
    this.homeService.getCountArea().subscribe((res) => {
      this.count = res
      console.log(res)
    })
  }
}
