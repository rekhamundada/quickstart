import { Injectable } from '@angular/core';
import { createTestCustomers } from './test-data';
import { LoggerService } from './logger.service';

@Injectable()
export class DataService {
  constructor(private loggerService: LoggerService) {

  }
  getCustomers() {
    const customers = createTestCustomers();
    this.loggerService.log(`Got ${customers.length} customers`);
    return customers;
  }

}
