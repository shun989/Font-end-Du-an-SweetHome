import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AddApartmentComponent} from "./component/add-apartment/add-apartment.component";
import { ChangePasswordComponent } from './component/change-password/change-password.component';

const routes: Routes = [
  {
    path: 'add-apartment',
    component: AddApartmentComponent
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent
  }
]

@NgModule({
  declarations: [
    AddApartmentComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeActionModule { }
