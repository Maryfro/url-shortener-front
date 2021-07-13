import { DatePipe } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [DatePipe]
})
export class HomepageComponent implements OnInit {

  class: string = 'bg-danger';

  form!: FormGroup;
  pattern = 'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()!@:%_\\+.~#?&\\/\\/=]*)';

  constructor(private fb: FormBuilder, private datePipe: DatePipe) {}
  

  ngOnInit(): void {
    this.formInit();
  }

  private formInit(): void {
    this.form = this.fb.group({ url: [null, 
      [Validators.required, Validators.pattern(this.pattern)]], 
      date: [] });
    const date = new Date();
    date.setDate(date.getDate()+3);
    this.form.controls.date.setValue(
      this.datePipe.transform(date, 'yyyy-MM-dd')
    );
  }
  mouseClick(): void {
    this.class = 'bg-success';
  }
  onSubmit() {
   console.log(this.form?.value)
  }
}
