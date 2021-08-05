import {Component, OnInit} from '@angular/core';
import {BookingService} from "../../../service/booking.service";
import {ActivatedRoute} from "@angular/router";
import {Apartment} from "../../../shared/model/apartment";

@Component({
  selector: 'app-bookmarked-list',
  templateUrl: './bookmarked-list.component.html',
  styleUrls: ['./bookmarked-list.component.css']
})
export class BookmarkedListComponent implements OnInit {
  apartments: any;

  constructor(private bookingService: BookingService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // @ts-ignore
    let id = +this.route.snapshot.paramMap.get('id');
    this.getBookmark(id);
  }

  getBookmark(id: number) {
    this.bookingService.getBookmarked(id).subscribe((res) => {
      this.apartments = res
      console.log(res)
    })
  }
}
