import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentListRoutingModule } from './student-list-routing.module';
import { StudentTableComponent } from './student-table/student-table.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { DatePipe } from "@angular/common";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
import { HttpClientModule } from '@angular/common/http'; 
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [StudentTableComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StudentListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    AngularFontAwesomeModule
    
  ],
  providers: [
    DatePipe
  ]
})
export class StudentListModule { }
