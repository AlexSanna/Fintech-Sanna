import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'al-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() registrati = new EventEmitter()
  @Output() vaiAllAccaunt = new EventEmitter<void>()

  registerForm: FormGroup
  visibilityPass: boolean= false;
  ripetiVisibilityPass: boolean= false;

  constructor(formBuilder: FormBuilder) {

    this.registerForm=  formBuilder.group({
      emailForm: ['',[Validators.email, Validators.required]],
      nameForm: ['',[Validators.required]],
      surnameForm: ['',[Validators.required]],
      passwordForm:['',[Validators.required, Validators.minLength(8)]],
      ripetiPasswordForm:['',[Validators.required, Validators.minLength(8)]]
    })



  }

  ngOnInit(): void {
  }

  registerLog(){
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
      }else{
        console.error('Form non Valido');
      }
  }

  get mail(){
    return this.registerForm.get('emailForm');
  }

  get name(){
    return this.registerForm.get('nameForm');
  }
  get surname(){
    return this.registerForm.get('surnameForm');
  }

  get pass(){
    return this.registerForm.get('passwordForm');
  }

  get ripetiPass(){
    return this.registerForm.get('ripetiPasswordForm');
  }

}
