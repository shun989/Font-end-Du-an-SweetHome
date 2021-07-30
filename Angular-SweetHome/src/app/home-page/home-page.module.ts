import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./component/home-page/home-page.component";
import {ShowApartmentComponent} from "./component/show-apartment/show-apartment.component";


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'show',
    component: ShowApartmentComponent
  },
]

@NgModule({
  declarations: [
    HomePageComponent,
    ShowApartmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HomePageModule { }
