import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-info',
  templateUrl: './products-info.component.html',
  styleUrls: ['./products-info.component.css']
})
export class ProductsInfoComponent implements OnInit {

  productList: any;

  @Input() option = 'person';

personProductList = [{ id: 1, product: 'Personal Auto', EffectiveDate: '', Expiration: ''},
  { id: 2, product: 'HomeOwners', EffectiveDate: '', Expiration: ''},
  { id: 3, product: 'Personal Watercrafts', EffectiveDate: '', Expiration: ''},
  { id: 4, product: 'Personal Umbrella', EffectiveDate: '', Expiration: ''}
];

orgProductList = [
  { id: 1, product: 'Workers Compensation', EffectiveDate: '', Expiration: ''}
];

displayedColumns: string[] = [ 'product', 'effectiveDate', 'expirationDate'];
public selectedOption = 'person';
  constructor() { }

  ngOnInit() {
    this.productList = (this.option === 'person') ? this.personProductList : this.orgProductList;
  }

public onApplicantChange(){
  console.log("in product info=="+this.option);
  this.productList = (this.selectedOption === 'person') ? this.personProductList : this.orgProductList;
}

}
