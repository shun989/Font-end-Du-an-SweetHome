import { Component, OnInit } from '@angular/core';
import {UserService} from "../../auth/service/user.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private userService: UserService,
              private http: HttpClient) { }

  ngOnInit(): void {

  }


}
