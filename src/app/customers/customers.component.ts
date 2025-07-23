import { Component } from '@angular/core';
export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: address;
}
export interface address {
  city: string;
  zipcode: string;
}

const customers: Customer[] = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "email": "Sincere@april.biz",
    "address": {
      "city": "Gwenborough",
      "zipcode": "92998-3874",
    },
    "phone": "1-770-736-8031 x56442",
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "email": "Shanna@melissa.tv",
    "address": {
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
    },
    "phone": "010-692-6593 x09125",
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "email": "Nathan@yesenia.net",
    "address": {
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
    },
    "phone": "1-463-123-4447",
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "city": "South Elvis",
      "zipcode": "53919-4257",
    },
    "phone": "493-170-9623 x156",
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "city": "Roscoeview",
      "zipcode": "33263",
    },
    "phone": "(254)954-1289",
  }
]

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'city', 'zipcode'];
  dataSource = customers;
}
