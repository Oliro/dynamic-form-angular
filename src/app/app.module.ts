import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBaseComponent } from './form/form-base/form-base.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormBaseComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
