import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./component/home-page/home-page.component";

import {DetailComponent} from './component/detail/detail.component';
import {PageListComponent} from './component/page-list/page-list.component';
import {HostListComponent} from './component/host-list/host-list.component';
import {ListOfUserComponent} from './component/list-of-user/list-of-user.component';
import {ApamentsHotListComponent} from './component/apaments-hot-list/apaments-hot-list.component';
import {ListInAreaComponent} from './component/list-in-area/list-in-area.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    // pathMatch: 'full'
  },
  {
    path: ':id/detail',
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
  }
]

@NgModule({
  declarations: [
    HomePageComponent,
    DetailComponent,
    PageListComponent,
    HostListComponent,
    ListOfUserComponent,
    ApamentsHotListComponent,
    ListInAreaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})

export class HomePageModule {
}
