import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { CardListComponent } from './views/card-list/card-list.component';
import { CardFormComponent } from './views/card-form/card-form.component';
import { CardComponent } from './views/card/card.component';
import { MovementComponent } from './views/movement/movement.component';
import { MovementsComponent } from './views/movements/movements.component';
import { DdMmYYYYDatePipe } from './pipe/dd-mm-yyyy-date.pipe';
import { TruncatePipe } from './pipe/truncate.pipe';
import { TransferComponent } from './views/transfer/transfer.component';
import { FilterMovementPipe } from './pipe/filter-movement.pipe';
import { FilterpipePipe } from './pipe/filterpipe.pipe';
import { ContactsComponent } from './views/contacts/contacts.component';
import { ContactListComponent } from './views/contact-list/contact-list.component';
import { ContactformComponent } from './views/contactform/contactform.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    RegisterComponent,
    LoginComponent,
    CardListComponent,
    CardFormComponent,
    CardComponent,
    MovementComponent,
    MovementsComponent,
    DdMmYYYYDatePipe,
    TruncatePipe,
    TransferComponent,
    FilterMovementPipe,
    FilterpipePipe,
    ContactsComponent,
    ContactListComponent,
    ContactformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
