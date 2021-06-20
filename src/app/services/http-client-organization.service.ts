import { Organization } from './../classes/organization';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const headerOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class HttpClientOrganizationService {


  organizationUrl = 'api/organizations';
  //organization_end_point = 'organizations';
  constructor(private http: HttpClient) { }

  searchOrganization(orgName: string): Observable<Organization[]> {
    orgName = orgName.trim();
    // add safe, encoded search parameter if term is present
    const options = orgName ?
    { params: new HttpParams().set('orgName', orgName)} : {};

    return this.http.get<Organization[]>(this.organizationUrl, options).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
}
