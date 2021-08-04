import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MasterComponent} from "./auth/component/layout/master/master.component";
import {MenuTopComponent} from "./auth/component/layout/menu-top/menu-top.component";
import {FooterComponent} from "./auth/component/layout/footer/footer.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeMasterComponent} from "./home-page/component/layout/home-master/home-master.component";
import {HomeFooterComponent} from "./home-page/component/layout/home-footer/home-footer.component";
import {HomeMenuTopComponent} from "./home-page/component/layout/home-menu-top/home-menu-top.component";
import {HomeSearchComponent} from "./home-page/component/layout/home-search/home-search.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { ActionMasterComponent } from './home-action/component/layout/action-master/action-master.component';
import { ActionMenuTopComponent } from './home-action/component/layout/action-menu-top/action-menu-top.component';
import { ActionMenuLeftComponent } from './home-action/component/layout/action-menu-left/action-menu-left.component';
import { ActionFooterComponent } from './home-action/component/layout/action-footer/action-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    MenuTopComponent,
    FooterComponent,
    HomeMasterComponent,
    HomeFooterComponent,
    HomeMenuTopComponent,
    HomeSearchComponent,
    ActionMasterComponent,
    ActionMenuTopComponent,
    ActionMenuLeftComponent,
    ActionFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      // {positionClass: 'toast-top-center', timeOut: 3000,
      //   preventDuplicates: true,
      //   closeButton: true,
      //   progressBar: true,
      //   maxOpened: 1,
      //   autoDismiss: true,
      //   enableHtml: true},
    ),
  ],
  providers: [
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
