import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApartmentService } from 'src/app/shared/service/apartment.service';


@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent implements OnInit {
  apartment: any | undefined;
  formCreate: FormGroup | undefined;
  users: any;
   
  constructor(private apartmentService: ApartmentService ,
    private http: HttpClient,
    private fb: FormBuilder,
    private route: Router) { }

  ngOnInit(): void {
    this.formCreate = this.fb.group({
      name: [''],
      price: [''],
      description: [''],
      bathroomNumber: [''],
      bedroomNumber: [''],
      address: [''],
      photo: [''],
      user_id: [''],
      wards_id: [''],
      category_id: [''],
    })
    this.getAllApartment()
  }
  getAllApartment() {
    this.apartmentService.getAllApartment().subscribe(res => {
      this.users = res;
      console.log(this.users)
    })
  }
  onFileSelect(event: any) {
    if (event != null && event.target.files.length > 0) {
      this.apartment = event.target.files[0];
    }
  }
  onSubmit(): void {
    let apartmentData = this.formCreate?.value
    apartmentData.apartment = this.apartment
    let user = JSON.parse(<string>(localStorage.getItem('user')));
    const formData = new FormData();
    formData.append('name', this.apartment);
    formData.append('price', apartmentData.price);
    formData.append('description', apartmentData.description);
    formData.append('bathroomNumber', apartmentData.bathroomNumber);
    formData.append('bedroomNumber', apartmentData.bedroomNumber);
    formData.append('user_id', user.id);
    formData.append('wards_id', apartmentData.wards_id);
    formData.append('category_id', apartmentData.category_id);
    this.apartmentService.addApartment(formData);
    // this.route.navigate(['user/song'])
  }
}
