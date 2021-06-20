import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent implements OnInit {


  effectiveDate : Date;
  agency: string;
  producer: string;
  company: string;
  riskState : string;
  constructor() { }

  ngOnInit() {
  }

}
