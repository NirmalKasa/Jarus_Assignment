import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PolicyDetailsComponent } from './policy-details/policy-details.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PersonInfoComponent } from './person-info/person-info.component';
import { OrgnizationInfoComponent } from './orgnization-info/orgnization-info.component';
import { ProductsInfoComponent } from './products-info/products-info.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { PersonInMemDataService } from './services/person-in-mem-data.service';
import { HttpClientModule } from '@angular/common/http';
import { OrganizationInMemDataService } from './services/organization-in-mem-data.service';
import { PolicySuccessComponent } from './policy-success/policy-success.component';


@NgModule({
  declarations: [
    AppComponent,
    PolicyDetailsComponent,
    PageNotFoundComponent,
    GeneralInfoComponent,
    PersonInfoComponent,
    OrgnizationInfoComponent,
    ProductsInfoComponent,
    PolicySuccessComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(PersonInMemDataService),
    InMemoryWebApiModule.forRoot(OrganizationInMemDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
