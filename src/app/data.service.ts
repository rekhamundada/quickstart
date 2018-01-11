import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { createTestCustomers } from './test-data';
import { LoggerService } from './logger.service';
import { Customer } from './model';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import  'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class DataService {
  private customersUrl = 'api/customers';
  private statesUrl = 'api/states';
  constructor(
    private http: Http,
    private loggerService: LoggerService

  ) { }
  // with promise
  getCustomersP() {
    this.loggerService.log(`Getting customers as a promise...`);
     const customers = createTestCustomers();

     return this.http.get(this.customersUrl)
      .toPromise()
        .then(response => {
          const custs = response.json().data as Customer[];
          this.loggerService.log(`Got ${customers.length} customers`);//
          return custs;
        }).catch((error: any) => {
          this.loggerService.log(`error occured ${error}`);
          return Promise.reject('something bad happened check the console');
        });
        }

    // return new Promise<Customer[]>(resolve => {
    //   setTimeout(() => {
    //     this.loggerService.log(`Got ${customers.length} customers`);
    //     resolve(customers);
    //   }, 1500);
    // });
  // }

// with observable
  /** Get existing customers as an Observable */
//   getCustomers(): Observable<Customer[]> {
//     this.loggerService.log('Getting customers as an Observable via Http ...');

//     return this.http.get(this.customersUrl)
//       .map(response => response.json().data as Customer[])  // <-- extract data
//       .do(custs => this.loggerService.log(`Got ${custs.length} customers`));
//   }
// }

  getCustomers(): Observable<Customer[]> {
    this.loggerService.log('Getting customers as an Observable ...');
    const customers = createTestCustomers();
    return of(customers)
      .delay(1500) // simulate server response latency
      .do(() => {
        this.loggerService.log(`Got ${customers.length} ///customers`);
      })
      .catch((error: any) => {
        this.loggerService.log(`error occured: ${error}`)
        return Observable.throw('')
      })
  }

  getStates(): Observable<string> {
    this.loggerService.log('Getting states as an Observable ...');

    return this.http.get(this.statesUrl)
    .map((response: any) => response.json().data as string[])
    .do((states: any) =>
     this.loggerService.log(`Got ${states.length} states`));
  }
}
