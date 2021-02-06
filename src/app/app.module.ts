import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SuccessComponent } from './successalert/successalert.component';

import { WarningComponent } from './warningalert/warningalert.component';

import { ServerComponent } from './server/server.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    WarningComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
