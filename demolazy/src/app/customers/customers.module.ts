import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerNameComponent } from './customer-name/customer-name.component';


@NgModule({
  declarations: [CustomerListComponent, CustomerNameComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule {

  constructor(){
    console.log('hey from customer');
    
  }
 }
