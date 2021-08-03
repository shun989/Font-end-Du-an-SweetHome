import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApartmentService} from "../../../service/apartment.service";
import {FormBuilder, FormArray, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../auth/service/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  apartment: any;
  category: any;
  isLogin: boolean | undefined;
  user: any;
  unavailabilityForm!: FormGroup;
  unavailability = {startDate: '', endDate: ''}

  constructor(private route: ActivatedRoute,
              private apartmentService: ApartmentService,
              public authService: AuthService,
              private router: Router,
              private toastr: ToastrService,
              private formBuilder: FormBuilder) {
    this.unavailabilityForm = this.formBuilder.group({
      startDate: [this.unavailability.startDate],
      endDate: [this.unavailability.endDate]
    });
    this.unavailabilityForm = this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    // @ts-ignore
    let id = +this.route.snapshot.paramMap.get('id');
    this.getById(id)
    this.authService.currentLogin.subscribe(isLogin => this.isLogin = isLogin);
    this.authService.currentUserLogin.subscribe(user => this.user = user);

  }

  submit() {
    let data = this.unavailabilityForm?.value;
    let start = new Date(data.startDate);
    let end = new Date(data.endDate);

    console.log(end.getDay());
  }

  getById(id: number) {
    this.apartmentService.getById(id).subscribe((data) => {
      this.apartment = data
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
}
