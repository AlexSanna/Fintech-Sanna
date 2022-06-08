
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Card } from 'src/app/models/card.model';
import { FilterMovementPipe } from 'src/app/pipe/filter-movement.pipe';






@Component({
  selector: 'al-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.scss']
})

export class MovementsComponent implements OnInit {


  @Output() guardaMovimenti = new EventEmitter<any>();





  controlloSaldo = new FormControl('', Validators.required);

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



  constructor() {

  }

  ngOnInit(): void {
  }








}
