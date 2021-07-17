import { Component, OnInit } from '@angular/core';
import {StatisticsService} from "../../service/statistics.service";
import {Statistics} from "./statistics.interface";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  statistics!: Statistics[];

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit(): void {

    this.statisticsService.getStatistics()
      .subscribe(value => this.getStatistics(value),
        error => this.errorHandle(error));
  }

  private getStatistics(value: Statistics[]): void {
    this.statistics = value;
  }

  private errorHandle(error: HttpErrorResponse): void {
    console.log(error);
    alert(error)
  }

}
