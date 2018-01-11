import { Component, OnInit } from '@angular/core';
import { Customer } from './model';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';


@Component({
  moduleId: module.id,
  selector: 'customer-list', // to use me, do this in html <my-app>
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.css']
})
export class CustomerListComponent  {
  customers: Customer[] = [];
  customer: Customer;

  constructor(private dataService: DataService , private loggerService: LoggerService ) { };

  // lifecycle goes here
  ngOnInit() {
    this.loggerService.log('Getting Customers ...');
    this.customers = this.dataService.getCustomers();
  }

  shift(increment: number) {
    // shift the index of the current customer by the increment
  let ix = this.customers.findIndex(c => c === this.customer) + increment;
    // prevent index overflow
  ix = Math.min(this.customers.length - 1, Math.max(0, ix));
    // set next customer
  this.customer = this.customers[ix];
    }
 }
