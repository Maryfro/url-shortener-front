import {Component, OnDestroy, OnInit} from '@angular/core';
import {StatisticsService} from "../../service/statistics.service";
import {Statistics} from "./statistics.interface";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit, OnDestroy {
  statistics!: Statistics[];
  private statSubscription: any;
  errorMsg: string | undefined;

  constructor(private statisticsService: StatisticsService) {
  }


  ngOnInit(): void {

    this.statSubscription = this.statisticsService.getStatistics()
      .subscribe(value => this.getStatistics(value),
        error => this.errorHandle(error));
  }

  private getStatistics(value: Statistics[]): void {
    this.errorMsg = undefined;
    this.statistics = value;
  }

  private errorHandle(error: HttpErrorResponse): void {
    this.errorMsg = error.message;
  }

  ngOnDestroy(): void {
    if (this.statSubscription)
      this.statSubscription.unsubscribe();

  }
}
