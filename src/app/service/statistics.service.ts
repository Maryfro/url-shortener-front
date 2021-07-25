import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Statistics } from '../pages/statistics/statistics.interface';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  private statisticsUrl: string = 'api/statistics';

  constructor(private http: HttpClient) { }

  getStatistics(): Observable<Statistics[]> {
    return this.http.get<Statistics[]>(this.statisticsUrl);
  }
}
