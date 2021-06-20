import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy-success',
  templateUrl: './policy-success.component.html',
  styleUrls: ['./policy-success.component.css']
})
export class PolicySuccessComponent implements OnInit {
  public isPolicyCreated= true;
  constructor() { }

  ngOnInit() {
  }

}
