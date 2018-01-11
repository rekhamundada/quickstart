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
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  customer: Customer;
  isBusy = false;

  constructor(private dataService: DataService , private loggerService: LoggerService ) { };

  // lifecycle goes here
  ngOnInit() {
    this.getCustomersP()
  }

  getCustomersP(){
    this.isBusy = true;
    this.loggerService.log('Getting Customers ...');

    this.dataService.getCustomersP()
    .then(custs => {
       this.isBusy = false;
       this.customers = custs;
     },(errorMsg: string) => {
      this.isBusy = false;
      //alert(errorMsg)
     }
    );

    // this.dataService.getCustomers()
    // .subscribe(custs => {
    //    this.isBusy = false;
    //    this.customers = custs;
    //  });
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
