import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { Customer } from './Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private _url: string= "http://localhost:8080/LoanMVCProj";
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getCustomer():Observable<Customer[]>
  {
    return this.http.get<Customer[]>(this._url+'');
  }
  createCustomer(customer: any): Observable<Customer> {
    console.log(customer);
    return this.http.post<Customer>(this._url + '/customer/create', JSON.stringify(customer), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));

  }
  validation(emailId:any):Observable<Customer>{
    console.log(emailId);
    return this.http.get<Customer>(this._url + '/customer/validate/'+emailId,this.httpOptions )
      .pipe(retry(1), catchError(this.handleError));
   
  }
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code : ${error.status} \n  Error Message : ${error.message}`
    }
    window.alert(errorMessage);
    return throwError(errorMessage);

  }
}
