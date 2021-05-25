import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError, retry } from 'rxjs/operators'
import { throwError } from 'rxjs';

import { Loan } from './loan';
import { Customer } from './customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  private _url: string = "http://localhost:8080/LoanMVCProj";
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  updateCustomer(customer: any) {
    return this.http.put<Customer>(this._url + '/customer/update', JSON.stringify(customer), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }


  getCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this._url + '')
      .pipe(retry(1), catchError(this.handleError));
  }
  createCustomer(customer: any): Observable<Customer> {
    console.log(customer);
    return this.http.post<Customer>(this._url + '/customer/create/' + customer.selectedLevel + '/' + customer.sal, JSON.stringify(customer), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));

  }
  loginCustomer(customerId: string): Observable<Customer> {
    return this.http.get<Customer>(this._url + '/customer/getCustomer/' + customerId)
      .pipe(retry(1), catchError(this.handleError));
  }
  createLoan(loan: any) {

    return this.http.post<Loan>(this._url + '/loan/create/' + loan.customerId, JSON.stringify(loan), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  createStudent(customer: any): Observable<Customer> {
    console.log(customer);
    return this.http.post<Customer>(this._url + '/customer/createStudent/' + customer.sal, JSON.stringify(customer), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  createEmployee(customer: any): Observable<Customer> {
    console.log(customer);
    return this.http.post<Customer>(this._url + '/customer/createEmployee/' + customer.sal, JSON.stringify(customer), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  createBusiness(customer: any): Observable<Customer> {
    console.log(customer);
    return this.http.post<Customer>(this._url + '/customer/createBusiness/' + customer.sal, JSON.stringify(customer), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  getLoan(id:any) {
    return this.http.get(this._url + '/loan/getList/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }
  updateLoan(loan: Loan): Observable<Loan> {
    return this.http.put<Loan>(this._url + '/loan/update', JSON.stringify(loan), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  getLoanById(id: any): Observable<Loan> {
    return this.http.get<Loan>(this._url + '/loan/getLoan/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteLoan(id: any) {
    return this.http.delete(this._url + '/loan/delete/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  getPendingLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(this._url + '/loan/getPendingLoans')
      .pipe(retry(1), catchError(this.handleError));
  }
  getNonPendingLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(this._url + '/loan/getNonPendingLoans')
      .pipe(retry(1), catchError(this.handleError));
  }
  approveLoan(loan: any) {
    return this.http.put(this._url + '/loan/approve', JSON.stringify(loan), this.httpOptions)
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
