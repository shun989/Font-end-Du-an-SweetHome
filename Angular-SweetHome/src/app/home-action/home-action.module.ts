import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AddApartmentComponent} from "./component/add-apartment/add-apartment.component";

const routes: Routes = [

  {
    path: 'add',
    component: AddApartmentComponent
  }
]

@NgModule({
  declarations: [
    AddApartmentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeActionModule { }
