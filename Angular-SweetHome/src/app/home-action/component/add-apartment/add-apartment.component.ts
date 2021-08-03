import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ApartmentActionService} from "../../service/apartment-action.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AddApartmentService} from "../../../shared/service/add-apartment.service";
import {AuthService} from "../../../auth/service/auth.service";


@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent implements OnInit {
  user: any;
  jpg: any | undefined;
  png: any | undefined;
  formCreate: FormGroup | undefined;
  provinces !: any;
  districts !: any;
  wards !: any;
  categories: any;
  city_id: string = '';
  district_id:string = '';
  allStatus: any;
  constructor(private apartmentAcService: ApartmentActionService,
              private http: HttpClient,
              private fb: FormBuilder,
              public authService : AuthService,
              private addApartmentService: AddApartmentService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.formCreate = this.fb.group({
      name: [''],
      price: [''],
      photo: [this.jpg || this.png],
      description: [''],
      address: [''],
      bathroomNumber: [''],
      bedroomNumber: [''],
      category_id:[''],
      ward_id:[''],
      user_id:[''],
      status_id:['']
    });
    this.authService.currentUserLogin.subscribe(user => this.user = user);
    this.getUserLogin();
    this.getCity();
    this.getAllWards();
    this.getAllCategory();
    this.getAllStatus();
  }

  getUserLogin():void {
    if(this.authService.isLogin()) {
      this.user = JSON.parse(<string>(localStorage.getItem('user')));
      // console.log(this.user)
    }
  }

  getCity(){
    this.addApartmentService.getProvinces().subscribe(res => {
      this.provinces = res;
      console.log(this.provinces)
    })
  }

  onChangeCity(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.city_id = value;
    console.log(value);
  }

  getDistrict():void{
    this.addApartmentService.getDistrict(this.city_id).subscribe(res => {
      this.districts = res;
      console.log(this.districts)
    })
  }

  onChangeDistrict(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.district_id = value;
    console.log(value);
  }


  getAllWards(){
    this.addApartmentService.getWards().subscribe(res => {
      this.wards = res;
      console.log(this.wards)
    })
  }

  getAllCategory(){
    this.addApartmentService.getCategory().subscribe(res =>{
      this.categories = res;
      console.log(this.categories);
    })
  }

  getAllStatus(){
    this.addApartmentService.getStatus().subscribe(res => {
      this.allStatus = res;
      console.log(this.allStatus);
    })
  }

  onFileSelect(event: any) {
    if (event != null && event.target.files.length > 0) {
      this.jpg = event.target.files[0];
      this.png = event.target.files[0];
    }
  }
  onSubmit(): void {
    let apartmentData = this.formCreate?.value
    apartmentData.photo = this.jpg || this.png
    let user = JSON.parse(<string>(localStorage.getItem('user')));
    const formData = new FormData();
    formData.append('photo', this.jpg || this.png);
    formData.append('name', apartmentData.name);
    formData.append('description', apartmentData.description);
    formData.append('price', apartmentData.price);
    formData.append('address', apartmentData.address);
    formData.append('category_id', apartmentData.category_id);
    formData.append('status_id', apartmentData.status_id);
    formData.append('user_id', user.id);
    formData.append('bathroomNumber', apartmentData.bathroomNumber);
    formData.append('bedroomNumber', apartmentData.bedroomNumber);
    formData.append('ward_id', apartmentData.ward_id);
    this.apartmentAcService.createApartment(formData);
    this.route.navigate(['action/user-list'])
  }
}
