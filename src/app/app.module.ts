import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { AddressComponent }        from './address.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { CustomerListComponent }   from './customer-list.component';

//  describes the class that follows it
@NgModule({
  imports:      [ BrowserModule, FormsModule ], // what stuff do i need
  declarations: [ AppComponent,
                  AddressComponent,
                  CustomerDetailComponent,
                  CustomerListComponent
                ], // what things are in my app
  bootstrap:    [ AppComponent ] // where do i start
})
export class AppModule { }
