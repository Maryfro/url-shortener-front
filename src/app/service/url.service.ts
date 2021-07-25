import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Model} from "../model/model";
import {ShortUrl} from "../model/shortUrl";
import {Observable, throwError} from "rxjs";
import { catchError } from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private path: string = 'api/';

  constructor(private http: HttpClient) {
  }

 /* addUrl(model: Model): Observable<ShortUrl> {
    return this.http.post<ShortUrl>(this.path, model);
  }*/

  addUrl(model: Model) {
    console.log("model "+ model.longUrl);


    return this.http.post<ShortUrl>(this.path, model, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }).pipe(
      (res) => { return res },
      catchError((err) => this.handleError(err)
      ));
  }

  handleError(err: HttpErrorResponse) {
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', err.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${err.status}, ` +
        `body was: ${err.error.url}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
