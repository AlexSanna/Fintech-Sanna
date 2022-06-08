import { Component,OnInit } from '@angular/core';

import { Card } from 'src/app/models/card.model';
import { CardForm } from 'src/app/models/cardform';
import { CardFormComponent } from '../card-form/card-form.component';


@Component({
  selector: 'al-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {





  cards: Card[] = [
    {
       numeroCarta: 123456789,
       saldo: 3000,
       tipoCarta: 'Visa',
    },
    {
       numeroCarta: 21456977,
       saldo: 5000,
       tipoCarta: 'MasterCard',
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }



  cancellaCarta(cards: Card) {
    const indexToRemove = this.cards.findIndex(u => u.numeroCarta === cards.numeroCarta);
    this.cards.splice(indexToRemove, 1);
  }

  pushCarta(cardform:CardForm){
   const card = {
  } as Card
  card.numeroCarta = cardform.numeroCartaForm;


   this.cards.push(card)

  }


}
