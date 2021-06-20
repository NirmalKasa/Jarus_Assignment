import { Organization } from './../classes/organization';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Person } from '../classes/person';

@Injectable({
  providedIn: 'root'
})
export class OrganizationInMemDataService  implements InMemoryDbService{

  constructor() { }

  createDb() {
    const organizations: Organization[] = [
      // tslint:disable-next-line:max-line-length
      { id: 1, orgName: 'SCB', firstName: 'SCB', lastName: '',   addressline1: "1520 Asian Mount 152", addressline2:"", city:"Chennai" , state: "TN", zipCode: '600087', phone: '121231231', email: 'SCB@gmail.com'	},
      { id: 2, orgName: 'Marsh', firstName: 'Marsh', lastName: '', addressline1: "1530 Asian Mount 152", addressline2: "", city:'Chennai' , state: "TN", zipCode:'600042', phone: '45674567457', email: 'Marsh@gmail.com'},
      { id: 3, orgName: 'Jarus',firstName: 'Jarus', lastName: '', addressline1: "1550 Asian Mount 152", addressline2:"", city:"Chennai" , state: "TN", zipCode:'600031', phone: '1242423451', email: 'Jarus@gmail.com'},
      { id: 4, orgName: 'EY', firstName: 'EY', lastName: '', addressline1: "1560 Asian Mount 152", addressline2:"", city:"Chennai" , state: "TN", zipCode:'600027', phone: '2345234523', email: 'City@gmail.com'},
      { id: 5, orgName: 'KPMG', firstName: 'KPMG', lastName: '', addressline1: "1570 Asian Mount 152", addressline2:"", city:"Chennai" , state: "TN", zipCode:'600090', phone: '2345234545', email: 'KPMG@gmail.com'},

    ]

    const persons: Person[] = [
      // tslint:disable-next-line:max-line-length
      { id: 1, firstName: 'Kiran', lastName: 'kumar', addressline1: '1520 Asian Mount 152', addressline2: '', city: 'Chennai' , state: 'TN', zipCode: '600087', phone: '121231231', email: 'kiran@gmail.com'	},
{ id: 2, firstName: 'Sudheer', lastName: 'Sharme', addressline1: '1530 Asian Mount 152', addressline2: '', city: 'Chennai' , state: 'TN', zipCode: '600042', phone: '45674567457', email: 'Sudheer@gmail.com'},
{ id: 3, firstName: 'Mohan', lastName: 'Krishna', addressline1: '1550 Asian Mount 152', addressline2: '', city: 'Chennai' , state: 'TN', zipCode: '600031', phone: '1242423451', email: 'Mohan@gmail.com'},
{ id: 4, firstName: 'Vishnu', lastName: 'Vardhan', addressline1: '1560 Asian Mount 152', addressline2: '', city: 'Chennai' , state: 'TN', zipCode: '600027', phone: '2345234523', email: 'Vishnu@gmail.com'},
{ id: 5, firstName: 'Gopal', lastName: 'Krishna', addressline1: '1570 Asian Mount 152', addressline2: '', city: 'Chennai' , state: 'TN', zipCode: '600090', phone: '2345234545', email: 'Gopal@gmail.com'},
{ id: 6, firstName: 'Kiran', lastName: 'kumar', addressline1: '1580 Asian Mount 152', addressline2: '', city: 'Madhurai' , state: 'TN', zipCode: '600087', phone: '121231231', email: 'kiran@gmail.com'	},
{ id: 7, firstName: 'Sudheer', lastName: 'Sharme', addressline1: '1530 Asian Mount 152', addressline2: '', city: 'Madhurai' , state: 'TN', zipCode: '600042', phone: '45674567457', email: 'Sudheer@gmail.com'},
{ id: 8, firstName: 'John', lastName: 'Smith', addressline1: '1590 Asian Mount 151', addressline2: '', city: 'Madhurai' , state: 'TN', zipCode: '600032', phone: '1242423451', email: 'johnk@gmail.com'},
{ id: 9, firstName: 'John', lastName: 'Smith', addressline1: '1160 Asian Mount 152', addressline2: '', city: 'Madhurai' , state: 'TN', zipCode: '600012', phone: '2345234523', email: 'johnd@gmail.com'},
{ id: 10, firstName: 'John', lastName: 'Smith', addressline1: '1270 Asian Mount 153', addressline2: '', city: 'Madhurai' , state: 'TN', zipCode: '600011', phone: '2345234545', email: 'johnp@gmail.com'},
    ];
    return {
      persons: persons,
      organizations: organizations
    };
  }
}
