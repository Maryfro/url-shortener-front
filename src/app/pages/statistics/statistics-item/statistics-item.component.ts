import {Component, Input, OnInit} from '@angular/core';
import {Statistics} from "../statistics.interface";

@Component({
  selector: 'app-statistics-item',
  templateUrl: './statistics-item.component.html',
  styleUrls: ['./statistics-item.component.css']
})
export class StatisticsItemComponent implements OnInit {

  @Input()
  elt!: Statistics;

  @Input()
  index: number = 1;

  ngOnInit(): void {
  }

}
