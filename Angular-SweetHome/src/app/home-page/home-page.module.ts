import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./component/home-page/home-page.component";
import {AddApartmentComponent} from "./component/add-apartment/add-apartment.component";
import { DetailPageComponent } from './component/detail-page/detail-page.component';

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
    DetailPageComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HomePageModule { }
