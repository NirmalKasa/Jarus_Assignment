import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Person } from '../classes/person';

const headerOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})

export class HttpClientPersonService {

  personUrl = 'api/persons';
  persons_endpoint = 'persons';


  constructor(private http: HttpClient) { }

  searchPersons(firstName: string, lastName: string): Observable<Person[]> {
    firstName = firstName.trim();
    // add safe, encoded search parameter if term is present
    const options = firstName ?
    { params: new HttpParams().set('firstName', firstName).set('lastName', lastName)} : {};

    return this.http.get<Person[]>(this.personUrl, options).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
}


