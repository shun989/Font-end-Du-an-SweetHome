import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./component/home-page/home-page.component";
import {ShowApartmentComponent} from "./component/show-apartment/show-apartment.component";
import { ListApartmentComponent } from './component/list-apartment/list-apartment.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'show',
    component: ShowApartmentComponent
  },
  {
    path: 'list',
    component: ListApartmentComponent
  }
]

@NgModule({
  declarations: [
    HomePageComponent,
    ShowApartmentComponent,
    ListApartmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HomePageModule { }
