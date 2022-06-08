import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../models/card.model';
import { Movement } from '../models/movement';

@Pipe({
  name: 'filterMovement'
})
export class FilterMovementPipe implements PipeTransform {

  transform(value: Movement[], cardId:string): any {

    return value.filter(movement => movement.cardId===cardId) ;
  }

}
