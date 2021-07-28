import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MasterComponent} from "./auth/component/layout/master/master.component";
import {HomeMasterComponent} from "./home-page/component/layout/home-master/home-master.component";

const routes: Routes = [
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
        loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)
      }
    ]
  },
  {
    path: '',
    component: MasterComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
