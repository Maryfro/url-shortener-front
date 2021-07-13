import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {StatisticsComponent} from './pages/statistics/statistics.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
