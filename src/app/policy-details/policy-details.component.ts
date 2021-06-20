import { ProductsInfoComponent } from './../products-info/products-info.component';
import { PersonInfoComponent } from './../person-info/person-info.component';
import { AfterContentInit, Component, ContentChild, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GeneralInfoComponent } from '../general-info/general-info.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.css']
})
export class PolicyDetailsComponent implements OnInit, AfterContentInit {

  // @ViewChild('generalInfo',{static:true}) generalInfoComponent: ElementRef;
  @ContentChild(GeneralInfoComponent, {static: true}) generalInfoComponent: GeneralInfoComponent;
  @ContentChild('personInfo', {static: false}) personInfoComponent: PersonInfoComponent;
  @ViewChild('productInfo', {static: false}) productsInfoComponent: ProductsInfoComponent;
  @ContentChild('personInfo', {static: false}) public personInfo: TemplateRef<any>;

  isPersonOptionSelected = false;
  isOptionSelected = false;
  isPersonSelected = false;
  isOrgSelected = false;
  applicant: string;
  constructor(private router: Router) {
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit==' + this.generalInfoComponent);
  }

  ngOnInit() {
  }


  createPolicy(generalInfo: ElementRef, personInfo: ElementRef, organizationInfo: ElementRef, productInfo: ElementRef) {
      console.log(generalInfo);
      console.log('created policy');
      console.log(this.personInfo);
      console.log(personInfo);
      console.log(productInfo);
      this.router.navigateByUrl('success');
  }

  handleChange(option: string) {
    this.isOptionSelected = true;
    this.applicant = option;
    console.log('selected applicant==' + this.applicant);
    this.productsInfoComponent.selectedOption = option;
    this.productsInfoComponent.onApplicantChange();
    this.isPersonOptionSelected = (option === 'person' ? true : false);
   // this.isOrgSelected = (option === 'organization' ? true : false);

  }
}
