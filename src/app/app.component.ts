import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jarus-assignment';
  isPolicyCreated = false;

  constructor(private router: Router) {
  }
  createPolicy(){
    this.isPolicyCreated=true;
    this.router.navigateByUrl('newpolicy');
  }
}
