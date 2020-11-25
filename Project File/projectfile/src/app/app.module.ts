import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EvidenceComponent } from './evidence/evidence.component';
import { FormsModule } from '@angular/forms';
import { RegComponent } from './reg/reg.component';
import { LogComponent } from './log/log.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    EvidenceComponent,
    RegComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "reg",
        component: RegComponent
      },
      {
        path: "log",
        component: LogComponent
      },
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
