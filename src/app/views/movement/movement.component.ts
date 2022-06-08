
import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';

import { Movement } from 'src/app/models/movement';



@Component({
  selector: 'al-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.scss']
})
export class MovementComponent implements OnInit {

  @Input() cards: Card[] | null = null;




  movements: Movement[] = [
    {
      _id: '1',
      type: 'in',
      amount: 3000,
      title: 'test',
      description: 'sto testando',
      cardId: '123456789',
      timestamp: 1653668199000,
    },
    {
      _id: '2',
      type: 'out',
      amount: 5000,
      title: 'test2',
      description: 'sto testando2',
      cardId: '21456977',
      timestamp: 1653668199000,
    },
    {
      _id: '3',
      type: 'in',
      amount: 3000,
      title: 'test3',
      description: 'sto testando3',
      cardId: '03',
      timestamp: 1653668199000,
    }

  ];
  color: string = "black";

  date = new Date();



  constructor() { }

  ngOnInit(): void {
  }



}
