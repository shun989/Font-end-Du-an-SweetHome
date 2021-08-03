import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./component/home-page/home-page.component";
import { DetailComponent } from './component/detail/detail.component';
import { PageListComponent } from './component/page-list/page-list.component';
import { HostListComponent } from './component/host-list/host-list.component';
import { ApamentsHotListComponent } from './component/apaments-hot-list/apaments-hot-list.component';
import { ListInAreaComponent } from './component/list-in-area/list-in-area.component';
import { CustomerOfListComponent } from './component/customer-of-list/customer-of-list.component';
import {MatSliderModule} from "@angular/material/slider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ReactiveFormsModule} from "@angular/forms";
import {MatNativeDateModule} from "@angular/material/core";
import {AuthGuard} from "../auth/service/auth.guard";
import {MatInputModule} from "@angular/material/input";
// import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MAT_DATE_LOCALE } from '@angular/material/core';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    // pathMatch: 'full'
  },
  {
    path: ':id/detail',
    component: DetailComponent,
    canActivate: [AuthGuard]
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
    path: 'list-of-customer/:id',
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
    MatSliderModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatInputModule,
    // MatMomentDateModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})

export class HomePageModule {
}
