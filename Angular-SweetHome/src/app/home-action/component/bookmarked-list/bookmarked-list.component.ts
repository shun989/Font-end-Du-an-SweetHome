import {Component, OnInit} from '@angular/core';
import {BookingService} from "../../../service/booking.service";
import {ActivatedRoute} from "@angular/router";
import {Apartment} from "../../../shared/model/apartment";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-bookmarked-list',
  templateUrl: './bookmarked-list.component.html',
  styleUrls: ['./bookmarked-list.component.css']
})
export class BookmarkedListComponent implements OnInit {
  apartments: any;
  booking_id!: number;
  message!: string;

  constructor(private bookingService: BookingService,
              private route: ActivatedRoute,
              private toastr: ToastrService,) {
  }

  ngOnInit(): void {
    // @ts-ignore
    let id = +this.route.snapshot.paramMap.get('id');
    this.getBookmark(id);
  }

  changeBookingId(id: any) {
    this.booking_id = id;
    console.log(this.booking_id)
  }

  submitBookingDel() {
    this.bookingService.deleteBookmarked(this.booking_id).subscribe((res) => {
      this.message = res.message
      this.toastr.success('Thank you', this.message)
    }, error => {
      this.toastr.error('Sorry', 'Bạn không được hủy trước một ngày check in')
    })
  }

  getBookmark(id: number) {
    this.bookingService.getBookmarked(id).subscribe((res) => {
      this.apartments = res
      console.log(res)
    })
  }
}
