import { Component } from '@angular/core';
import { Customer } from './customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  title='Customer Portal';

  customer : Customer = new Customer();
  customerList : Array<Customer> = new Array<Customer>;

  addCustomer(){

    this.customerList.push(this.customer);
    this.customer = new Customer();
  }

  // Handle Errors through Centralized method
  hasError(typeOfValidator:string, controlName:string): boolean{
      return this.customer.formCustomerGroup.controls[controlName].hasError(typeOfValidator);
    }
  
}
