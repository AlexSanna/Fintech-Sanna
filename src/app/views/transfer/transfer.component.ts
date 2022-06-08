import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'al-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

  @Input() contacts:Contact[] | null= null;

  aggiungiTransfer: FormGroup
  controlloSaldo = new FormControl('', Validators.required);
  myControl = new FormControl();









  constructor(formBuilder: FormBuilder) {


    this.aggiungiTransfer= formBuilder.group({
      selezionaForm:['',[Validators.required]],
      nomeForm:['',[Validators.required]],
      surnameForm:['',[Validators.required]],
      numeroIbanForm:['',[Validators.required,Validators.minLength(27),Validators.maxLength(27)]],
      importoForm:['',[Validators.required]],
    })
  }



  ngOnInit() {

  }

  trasferisciDenaro(){

  }

}
