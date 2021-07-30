import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MasterComponent} from "./auth/component/layout/master/master.component";
import {HomeMasterComponent} from "./home-page/component/layout/home-master/home-master.component";
import {AuthGuard} from "./auth/service/auth.guard";
import {ActionMasterComponent} from "./home-action/component/layout/action-master/action-master.component";
import {ChangePasswordComponent} from "./auth/component/change-password/change-password.component";

const routes: Routes = [
  {
    path: 'account',
    component: MasterComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomeMasterComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule),
      }
    ]
  },

  {
    path: 'action',
    component: ActionMasterComponent,
    children: [
      {
        path:'',
        loadChildren: () => import('./home-action/home-action.module').then(m => m.HomeActionModule),
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
