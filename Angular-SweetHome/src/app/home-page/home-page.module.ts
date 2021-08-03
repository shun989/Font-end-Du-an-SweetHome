import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./component/home-page/home-page.component";
import { DetailComponent } from './component/detail/detail.component';
import { PageListComponent } from './component/page-list/page-list.component';
import { HostListComponent } from './component/host-list/host-list.component';
import { ApamentsHotListComponent } from './component/apaments-hot-list/apaments-hot-list.component';
import { ListInAreaComponent } from './component/list-in-area/list-in-area.component';
import { CustomerOfListComponent } from './component/customer-of-list/customer-of-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path:':id/detail',
    component: DetailComponent
  },
  {
    path: 'all-apartments',
    component: PageListComponent
  },
  {
    path: 'host-list',
    component: HostListComponent
  },
  {
    path: 'apartment-hot-list',
    component: ApamentsHotListComponent
  },
  {
    path: 'area/:id',
    component: ListInAreaComponent
  },
  {
    path: ':customer-of-list',
    component: CustomerOfListComponent
  }
]

@NgModule({
  declarations: [
    HomePageComponent,
    DetailComponent,
    PageListComponent,
    HostListComponent,
    ApamentsHotListComponent,
    ListInAreaComponent,
    CustomerOfListComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HomePageModule { }
