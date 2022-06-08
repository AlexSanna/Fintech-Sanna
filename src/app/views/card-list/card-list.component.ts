import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { CardForm } from 'src/app/models/cardform';



@Component({
  selector: 'al-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() cards:Card[] | null= null;
  @Output() vediMovimenti = new EventEmitter<number>();
  @Output() rimuovi = new EventEmitter<Card>();
  @Output() aggiungi = new EventEmitter<void>();






  constructor() { }

  ngOnInit(): void {
  }

  apriDrawer(){
    this.aggiungi.emit();

  }


}
