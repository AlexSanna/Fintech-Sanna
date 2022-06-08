import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactsComponent } from '../contacts/contacts.component';

@Component({
  selector: 'al-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @Input() contacts:Contact[] | null=null
  @Output() check = new EventEmitter<void>();
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();




  constructor() { }

  ngOnInit(): void {
  }

}
