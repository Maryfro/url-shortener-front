import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {StatisticsComponent} from "./pages/statistics/statistics.component";

const routes: Routes=[
  {path: "home", component: HomepageComponent},
  {path: "statistics", component: StatisticsComponent},
  {path: "", redirectTo: "home", pathMatch: "full"}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
