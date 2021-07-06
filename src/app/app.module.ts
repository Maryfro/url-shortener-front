import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
