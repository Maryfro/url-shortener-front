import { DatePipe } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Model } from 'src/app/model/model';
import { dateValidator } from './dateValidator';
import {ShortUrl} from "../../model/shortUrl";
import {UrlService} from "../../service/url.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [DatePipe]
})
export class HomepageComponent implements OnInit {

  class: string = 'bg-danger';

  form!: FormGroup;
  shortUrl!: ShortUrl;
  pattern = 'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()!@:%_\\+.~#?&\\/\\/=]*)';

  constructor(private fb: FormBuilder, private datePipe: DatePipe, private urlService: UrlService) {}


  ngOnInit(): void {
    this.formInit();

    this.form?.valueChanges
    .subscribe(value => {
      console.log( "value " + value.url)
    })
  }

  private formInit(): void {
    const date = new Date();
    date.setDate(date.getDate()+3);
    this.form = this.fb.group({ url: [null,
      [Validators.required, Validators.pattern(this.pattern)]],
      date: [this.datePipe.transform(date, 'yyyy-MM-dd'),
       dateValidator] });

   /*  this.form.controls.date.setValue(
      this.datePipe.transform(date, 'yyyy-MM-dd') */

  }
 /* mouseClick(): void {
    this.class = 'bg-success';
  }*/
  onSubmit() {

    const model: Model = {
      "url": this.form.value.url,
      "date": this.form.value.date,
      "id": 0,
    }

    this.urlService.addUrl(model)
      .subscribe(value => this.callBackOk(value), error => HomepageComponent.callBackError(error));
  }

  private callBackOk(value: ShortUrl) {
    this.shortUrl = value;
    console.log( "value " + value);
  }

  private static callBackError(error: HttpErrorResponse) {
    console.log(error)
  }

  navigateByUrl(shortUrl: string) {
    window.location.href = shortUrl;
  }
}
