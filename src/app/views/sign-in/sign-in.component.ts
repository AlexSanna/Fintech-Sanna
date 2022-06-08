import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'al-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  @Output() accedi = new EventEmitter()
  @Output() nuovoAccaunt = new EventEmitter<void>()

  visibilityPass: boolean= false;
  signIn: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.signIn= formBuilder.group({
      emailForm: ['',[Validators.email, Validators.required]],
      passwordForm:['',[Validators.required, Validators.minLength(8)]]
    })


  }

  ngOnInit(): void {
  }

  signInAccedi(){

    if (this.signIn.valid){
      console.log(this.signIn.value);
    }else{
      console.error('Form non valido');
    }


  }

  get mail(){
    return this.signIn.get('emailForm');
  }
  get pass(){
    return this.signIn.get('passwordForm');
  }



}
