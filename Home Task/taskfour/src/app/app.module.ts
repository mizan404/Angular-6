import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegComponent } from './reg/reg.component';
import { LogComponent } from './log/log.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
    LogComponent,
    WelcomeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "reg",
        component: RegComponent
      },
      {
        path: "log",
        component: LogComponent
      },
      {
        path: "welcome",
        component: WelcomeComponent
      }
    ]
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
