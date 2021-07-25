import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {StatisticsComponent} from './pages/statistics/statistics.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { StatisticsItemComponent } from './pages/statistics/statistics-item/statistics-item.component';
import {HttpClientModule} from "@angular/common/http";
import { ModalWindowComponent } from './pages/homepage/modal-window/modal-window.component';
import {ClipboardModule} from "ngx-clipboard";
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StatisticsComponent,
    StatisticsItemComponent,
    ModalWindowComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClipboardModule,
    //NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
