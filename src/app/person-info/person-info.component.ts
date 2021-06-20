import { Component, OnInit } from '@angular/core';
import { Person } from '../classes/person';
import { HttpClientPersonService } from '../services/http-client-person.service';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit {

   afFirstName: string;
   afLastName: string;
   firstName: string;
   lastName: string;
   addressline1: string ;
   addressline2: string ;
   city: string ;
   state: string;
   zipCode: string ;
   phone: string;
   email: string;
  personsList: Person[];
  constructor(private PersonService: HttpClientPersonService) { }


  ngOnInit() {
  }

  searchPersons(){
    console.log('hitting the service');
    this.PersonService.searchPersons(this.afFirstName, this.afLastName).subscribe(
      data => {
        this.personsList = data;
        console.log(this.personsList);

      },
      error => {
        console.log('error in downloading the file');
      },
      () => {
        console.log('method complete');
      }
    )
  }

  selectPerson(person: Person){
    console.log(person);
    this.autoFillPersonDetails(person);
  }
  autoFillPersonDetails(person: Person) {
    this.firstName = person.firstName;
    this.lastName = person.lastName;
    this.addressline1 = person.addressline1;
    this.addressline2 = person.addressline2;
    this.city = person.city;
    this.state = person.state;
    this.zipCode = person.zipCode;
    this.phone = person.phone;
    this.email = person.email;
  }
}
