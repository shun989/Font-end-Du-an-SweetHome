import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApartmentService} from "../../../service/apartment.service";
import {FormBuilder, FormArray, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../auth/service/auth.service";
import {ToastrService} from "ngx-toastr";
import {differenceInDays} from "date-fns";
import {BookingService} from "../../../service/booking.service";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {Booking} from "../../../shared/model/booking";
import {User} from "../../../shared/model/user";
import {Apartment} from "../../../shared/model/apartment";
import {now} from "moment";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']

})

export class DetailComponent implements OnInit {
  apartment: Apartment[] = [];
  user: any;

  category: any;
  isLogin: boolean | undefined;
  user_id: any;
  unavailabilityForm!: FormGroup;
  unavailability = {startDate: '', endDate: ''}
  loading: boolean = false;
  url = '';
  @ViewChild('fileInput') fileInput !: ElementRef;
  days!: number;
  total_price!: number;
  booking!: Booking;
  start: any;
  end: any;


  constructor(private route: ActivatedRoute,
              private apartmentService: ApartmentService,
              public authService: AuthService,
              private router: Router,
              private toastr: ToastrService,
              private formBuilder: FormBuilder,
              private bookingService: BookingService,
  ) {
    this.unavailabilityForm = this.formBuilder.group({
      startDate: [this.unavailability.startDate],
      endDate: [this.unavailability.endDate]
    });
    this.unavailabilityForm = this.formBuilder.group({
      startDate: [now(), Validators.required],
      endDate: ['', Validators.required],
    })

    // this.booking.apartment_id = this.apartment.id;
  }

  onStartDateChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;
  }

  onEndDateChange() {
    // const value = (e.target as HTMLInputElement).value;
    let data = this.unavailabilityForm?.value;
    this.start = data.startDate;
    this.end = data.endDate;
    if (this.start && this.end) {
      this.days = differenceInDays(this.end, this.start);
      this.total_price = +this.apartment[0].price * this.days;
    }
  }

  ngOnInit(): void {
    // @ts-ignore
    let id = +this.route.snapshot.paramMap.get('id');
    this.getById(id)
    // this.authService.currentLogin.subscribe(isLogin => this.isLogin = isLogin);
    // this.authService.currentUserLogin.subscribe(user => this.user = user);
    this.user = this.authService.getUserInfo();
    console.log(this.user)
  }

  submit(booking: Booking) {
    booking.total_price = this.total_price;
    booking.user_id = this.user[0].id;
    booking.apartment_id = this.apartment[0].id;
    // booking.user_id = this.user_id.id;
    console.log(booking)
    // booking.apartment_id = apartment[0].id;
    this.bookingService.requestBooking(booking).subscribe((res) => {
      console.log(res)
      this.toastr.success('Success', 'Booking successfully')
    })
  }

  getById(id: number) {
    this.apartmentService.getById(id).subscribe((data) => {
      this.apartment = data
      // console.log(data)
    });
  }

  getErrorMessageStartDate() {
    if (this.startDate?.hasError('required')) {
      return 'You must enter a value';
    }
    return this.startDate?.hasError('startDate') ? 'Not a valid start date' : '';

  }

  getErrorMessageEndDate() {
    if (this.endDate?.hasError('required')) {
      return 'You must enter a value';
    }
    return this.endDate?.hasError('endDate') ? 'Not a valid end date' : '';

  }

  get startDate() {
    return this.unavailabilityForm?.get('startDate')
  }

  get endDate() {
    return this.unavailabilityForm?.get('endDate')
  }

  onSelectFile(event: Event) {
    // @ts-ignore
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      // @ts-ignore
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      // @ts-ignore
      $.ajax({
        success: function(response: any){
          if(response != 0){
            // Show image preview
            // @ts-ignore
            $('#preview').append("<img src='"+response+"' width='100' height='100' style='display: inline-block;'>");
          }else{
            alert('file not uploaded');
          }
        }
      });
      reader.onload = (event) => { // called once readAsDataURL is completed
        // @ts-ignore
        this.url = event.target.result;

      }
    }
  }

  clearFile() {
    // @ts-ignore
    this.form.get('file').setValue(null);
    this.fileInput.nativeElement.value = '';
  }


}
