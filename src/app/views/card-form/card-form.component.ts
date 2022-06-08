import { AfterViewInit, Component, Directive, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CardForm } from 'src/app/models/cardform';


@Directive({selector: 'child-directive'})
class ChildDirective {
}

@Component({
  selector: 'al-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements AfterViewInit {

  @ViewChild('cleanup', { read: ChildDirective }) form!: ChildDirective;


  @Output() aggiungiCreditCard = new EventEmitter<CardForm>()
  @Output() annulla = new EventEmitter<void>()




  aggiungiCartaForm: FormGroup

  constructor(formBuilder: FormBuilder) {

    this.aggiungiCartaForm= formBuilder.group({
      selezionaForm:['',[Validators.required]],
      nomeForm:['',[Validators.required]],
      cognomeForm:['',[Validators.required]],
      numeroCartaForm:['',[Validators.required,Validators.minLength(16),Validators.maxLength(16)]],
      codiceSicurezzaForm:['',[Validators.required,Validators.minLength(3),Validators.maxLength(3)]],
    })
   }

   ngAfterViewInit() {



  }
  cleanup(){
    this.annulla.emit();
    if (this.annulla) {
      this.aggiungiCartaForm.reset();
   }
  }



  aggiungiCarta(){
    if(this.aggiungiCartaForm.valid){
      console.log(this.aggiungiCartaForm.value)
      this.aggiungiCreditCard.emit(this.aggiungiCartaForm.value)
    }else{
      console.error('Form non Valido')


    }

  }

}


