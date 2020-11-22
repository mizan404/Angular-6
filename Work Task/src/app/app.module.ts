import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InboxComponent } from './inbox/inbox.component';
import { SentComponent } from './sent/sent.component';
import { DraftComponent } from './draft/draft.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    InboxComponent,
    DraftComponent,
    SentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "inbox",
        component: InboxComponent
      },
      {
        path: "sent",
        component: SentComponent
      },
      {
        path: "draft",
        component: DraftComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
