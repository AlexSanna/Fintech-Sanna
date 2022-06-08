import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'al-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

signin:boolean = true;
register:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  mostraRegistrati(){
    this.register= true;
    this.signin= false;
  }

  mostraSignIn(){
    this.signin= true;
    this.register= false;
  }
}
