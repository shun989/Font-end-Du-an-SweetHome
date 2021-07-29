import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./component/home-page/home-page.component";
import {AddApartmentComponent} from "./component/add-apartment/add-apartment.component";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path:'add-apartment',
    component: AddApartmentComponent
  }
]

@NgModule({
  declarations: [
    HomePageComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HomePageModule { }
