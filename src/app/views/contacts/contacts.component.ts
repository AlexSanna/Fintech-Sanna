import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'al-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[] = [
    {
      _id: '123456789',
      name: 'Alessandro',
      surname: 'Sanna',
      iban: '1111111111111111',
    },
    {
      _id: '21456977',
      name: 'Andrea',
      surname: 'Rossi',
      iban: '2222222222222222',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
