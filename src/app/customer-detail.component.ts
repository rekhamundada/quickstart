import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from './model';


@Component({
  moduleId: module.id,
  selector: 'customer-detail', // to use me, do this in html <my-app>
  templateUrl: 'customer-detail.component.html'
})
export class CustomerDetailComponent  {
  @Input() customer: Customer;
  @Output() shift = new EventEmitter<number>();

  showAddress = true;

  right() {
    this.shift.emit(1);
  }

  left() {
    this.shift.emit(-1);
  }
 }
