import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../shared/model/user";
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister !: FormGroup;
  message:string|undefined;
  userModelObj: User = new class implements User {
    address ?: string;
    email ?: string;
    fullName ?: string;
    id ?: number;
    image ?: string;
    name ?: string;
    password ?: string;
    phone ?: string;
    token ?: string;
  };

  error_messages = {
    'name': [
      {type: 'required', message: 'User Name is required.'},
      {type: 'minlength', message: 'User Name min length.'},
      {type: 'maxlength', message: 'User Name max length.'},
    ],
    'email': [
      {type: 'required', message: 'Email is required.'},
      {type: 'email', message: 'Email  wrong!'},
    ],
    'phone': [
      {type: 'required', message: 'Phone is required.'},
      {type: 'pattern', message: 'Telephone number wrong!'},
    ],
    'password': [
      {type: 'required', message: 'Password is required.'},
      {type: 'minlength', message: 'Password min length.'},
      {type: 'maxlength', message: 'Password max length.'},
    ],
    'confirmPassword': [
      {type: 'required', message: 'Confirm Password is required.'},
      {type: 'minlength', message: 'Confirm Password min length.'},
      {type: 'maxlength', message: 'Confirm Password max length.'},
    ],
  }
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      name: new FormControl ('', [
        Validators.required,
        Validators.minLength(4)]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('(84|0[3|5|7|8|9])+([0-9]{8})'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)]),
      confirmPassword: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]),
    },{
      validators: this.passwordMatch.bind(this)
    })
  }

  get f() { return this.formRegister.controls; }

  submitRegister():void {

    this.userModelObj.name = this.formRegister.value.name;
    this.userModelObj.password = this.formRegister.value.password;
    this.userModelObj.phone = this.formRegister.value.phone;
    // @ts-ignore
    this.userModelObj.password_confirmation = this.formRegister.value.confirmPassword;
    this.userModelObj.email = this.formRegister.value.email;

    this.authService.createUser(this.userModelObj).subscribe(res =>{
        this.message = res.message
        console.log(this.message)
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formRegister.reset();
        this.toastr.success('Success', 'Register Successfully!')
        this.router.navigate(['account/login']);
      },
      error => {
        this.message = error.error
      })
  }

  passwordMatch(formGroup: FormGroup) {
    // @ts-ignore
    const {value: password} = formGroup.get('password');
    // @ts-ignore
    const {value: confirmPassword} = formGroup.get('confirmPassword');
    return password === confirmPassword ? null : {passwordNotMatch: true};
  }

  get name(){
    return this.formRegister?.get('name')
  }

  get email(){
    return this.formRegister?.get('email')
  }

  get phone(){
    return this.formRegister?.get('phone')
  }

  get password(){
    return this.formRegister?.get('password')
  }
  get confirmPassword(){
    return this.formRegister?.get('confirmPassword')?.errors;
  }

}
