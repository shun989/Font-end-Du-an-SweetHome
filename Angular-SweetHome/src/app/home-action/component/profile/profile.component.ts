import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../../auth/service/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {UserActionService} from "../../service/user-action.service";
import {User} from "../../../shared/model/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  jpg: any | undefined;
  png: any | undefined;
  formUpload !: FormGroup;
  formUpdatePr !: FormGroup;
  loading: boolean = false;
  url = '';
  isLogin: boolean | undefined;
  user: any;
  message: any;
  @ViewChild('fileInput') fileInput !: ElementRef;
  userModelObj: User = new class implements User {
    address ?: string;
    email ?: string;
    fullName ?: string;
    id ?: number;
    image ?: string;
    name ?: string;
    phone ?: string;
    token ?: string;
  };

  constructor(public authService : AuthService,
              private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private userActionService: UserActionService)
  { }

  ngOnInit(): void {
    this.authService.currentLogin.subscribe(isLogin => this.isLogin = isLogin);
    this.authService.currentUserLogin.subscribe(user => this.user = user);
    this.checkLogin();
    this.getUserLogin()
  }

  checkLogin():void {
    this.isLogin = this.authService.isLogin();
  }

  getUserLogin():void {
    if(this.authService.isLogin()) {
      this.user = JSON.parse(<string>(localStorage.getItem('user')));
      // console.log(this.user)
    }
  }

  onSelectFile(event: Event) {
    // @ts-ignore
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      // @ts-ignore
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        // @ts-ignore
        this.url = event.target.result;
      }
    }
  }

  clearFile() {
    // @ts-ignore
    this.form.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
  }

  onUpload(): void {
    let imageData = this.formUpload?.value
    imageData.name = this.jpg || this.png
    let userId = this.user[0].id;
    const formData = new FormData();
    formData.append('avatar-name', this.jpg || this.png);
    formData.append('user_id', userId)
    this.userActionService.uploadAvatar(formData);
    this.router.navigate(['action/profile'])
  }

  submitUpdate(): void {
    this.userModelObj.id = this.user.id;
    this.userModelObj.name = this.user.name;
    this.userModelObj.fullName = this.formUpdatePr.value.fullName;
    this.userModelObj.phone = this.user.phone;
    this.userModelObj.email = this.user.email;
    this.userModelObj.address = this.formUpdatePr.value.address;
    this.userActionService.updateUser(this.userModelObj);
  }
}
