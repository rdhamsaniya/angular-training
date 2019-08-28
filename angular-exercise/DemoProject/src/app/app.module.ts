import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccordionModule } from 'ngx-bootstrap/accordion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroesAccordianComponent } from './heroes-accordian/heroes-accordian.component';
import { HttpClientModule } from '@angular/common/http'; 

import { BaseModule } from './base/base.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './user/signin/signin.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { Injectable } from '@angular/core';
import { ToastrManager, ToastrModule } from 'ng6-toastr-notifications';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesAccordianComponent,
    DashboardComponent,
    SigninComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BaseModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    AccordionModule.forRoot()
  ],
  providers: [ToastrManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
