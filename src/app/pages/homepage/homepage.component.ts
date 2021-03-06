import {DatePipe} from '@angular/common';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Model} from 'src/app/model/model';
import {dateValidator} from './dateValidator';
import {ShortUrl} from "../../model/shortUrl";
import {UrlService} from "../../service/url.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Subscription} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalWindowComponent} from "./modal-window/modal-window.component";


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [DatePipe]
})
export class HomepageComponent implements OnInit, OnDestroy {

  class: string = 'bg-danger';

  form!: FormGroup;
  shortUrl!: ShortUrl;
  pattern = 'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()!@:%_\\+.~#?&\\/\\/=]*)';
  private subscriptions: Subscription[] = [];
  errorMsg: string | undefined;


  constructor(private fb: FormBuilder, private datePipe: DatePipe, private urlService: UrlService, private modalService: NgbModal) {
  }


  ngOnInit(): void {
    this.formInit();

    this.form?.valueChanges
      .subscribe(value => {
        console.log("value " + value.url)
      })
  }

  private formInit(): void {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    this.form = this.fb.group({
      url: [null,
        [Validators.required, Validators.pattern(this.pattern)]],
      date: [this.datePipe.transform(date, 'yyyy-MM-dd'),
        dateValidator]
    });

    /*  this.form.controls.date.setValue(
       this.datePipe.transform(date, 'yyyy-MM-dd') */

  }

  /* mouseClick(): void {
     this.class = 'bg-success';
   }*/
  onSubmit() {

    this.errorMsg = undefined;

    const model: Model = {
      longUrl: this.form.value.url,
      expirationDate: this.form.value.date,
      id: 0
    }

    const addUrlSubscription = this.urlService.addUrl(model)
      .subscribe(value => this.callBackOk(value), error => this.callBackError(error));

    this.subscriptions.push(addUrlSubscription);
  }

  private callBackOk(value: ShortUrl) {
    this.shortUrl = value;
    const modal = this.modalService.open(ModalWindowComponent);
    modal.componentInstance.shortUrl = value;
  }

  private callBackError(error: HttpErrorResponse) {
    this.errorMsg = error.message;
  }

  navigateByUrl(shortUrl: string) {
    window.open(shortUrl, "_blank");
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(value => value.unsubscribe());


  }
}
