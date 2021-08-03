import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AddApartmentComponent} from "./component/add-apartment/add-apartment.component";
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { ProfileComponent } from './component/profile/profile.component';
import { BookmarkedListComponent } from './component/bookmarked-list/bookmarked-list.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { NotificationsComponent } from './component/notifications/notifications.component';
import { PaymentsComponent } from './component/payments/payments.component';
import { AccountComponent } from './component/account/account.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: 'add-apartment',
    component: AddApartmentComponent
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'bookmarked',
    component: BookmarkedListComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'payment',
    component: PaymentsComponent
  },
  {
    path: 'notification',
    component: NotificationsComponent
  }
]

@NgModule({
  declarations: [
    AddApartmentComponent,
    ChangePasswordComponent,
    ProfileComponent,
    BookmarkedListComponent,
    UserListComponent,
    NotificationsComponent,
    PaymentsComponent,
    AccountComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        FormsModule
    ]
})
export class HomeActionModule { }
