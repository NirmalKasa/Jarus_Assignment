import { Organization } from './../classes/organization';
import { Component, OnInit } from '@angular/core';
import { HttpClientOrganizationService } from '../services/http-client-organization.service';

@Component({
  selector: 'app-orgnization-info',
  templateUrl: './orgnization-info.component.html',
  styleUrls: ['./orgnization-info.component.css']
})
export class OrgnizationInfoComponent implements OnInit {

  organizationName: string;
   firstName: string;
   lastName: string;
   addressline1: string ;
   addressline2: string ;
   city: string ;
   state: string;
   zipCode: string ;
   phone: string;
   email: string;

  orgDetails : Organization[]
  constructor(private orgService: HttpClientOrganizationService) { }

  ngOnInit() {
  }

  searchOrganization(){
    this.orgService.searchOrganization(this.organizationName).subscribe(
      data => {
        this.orgDetails = data;
        console.log(this.orgDetails);
        this.autoFillOrgForm(this.orgDetails[0]);
      },
      error => {
        console.log('error in fetching the company details');
      },
      () => {
        console.log('method complete');
      }
    )
  }

  autoFillOrgForm(org: Organization) {
    this.firstName = org.firstName;
    this.lastName = org.lastName;
    this.addressline1 = org.addressline1;
    this.addressline2 = org.addressline2;
    this.city = org.city;
    this.state = org.state;
    this.zipCode = org.zipCode;
    this.phone = org.phone;
    this.email = org.email;
  }
  
}
