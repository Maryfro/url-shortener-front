import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  topFive: {longUrl:string, shortUrl:string, counter:number} []= [];


  constructor() { }

  ngOnInit(): void {
    // this.topFive= [];
    this.topFive.push(
      {longUrl:"http://google.com",shortUrl:"bYd8fs", counter:148 },
      {longUrl:"http://zoom.com/test1",shortUrl:"cetI0X", counter:145 },
      {longUrl:"http://yahoo.com",shortUrl:"bKpHI4", counter:139 },
      {longUrl:"http://facebook.com",shortUrl:"oxjq0", counter:134 },
      {longUrl:"http://meduza.io",shortUrl:"bTc7Sc", counter:131 }
      )
  }

}
