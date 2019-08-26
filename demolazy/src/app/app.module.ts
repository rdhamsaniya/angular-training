import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomPreloading } from './common/CustomPreloading';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CustomPreloading],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('App Module');
  }
 }
