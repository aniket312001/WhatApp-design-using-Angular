import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplaymessagesComponent } from './displaymessages/displaymessages.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { PeoplesHeadingbarComponent } from './peoples-headingbar/peoples-headingbar.component';
import { PeoplesSearchmenuComponent } from './peoples-searchmenu/peoples-searchmenu.component';
import { PeopleChatsComponent } from './people-chats/people-chats.component';
import { ChatsService } from './chats.service';
import { DefaultDisplayComponent } from './default-display/default-display.component';
import { MychatsComponent } from './mychats/mychats.component';
import { ChatHeadingComponent } from './chat-heading/chat-heading.component';
import { ChatTextbarComponent } from './chat-textbar/chat-textbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplaymessagesComponent,
    PeoplesComponent,
    PeoplesHeadingbarComponent,
    PeoplesSearchmenuComponent,
    PeopleChatsComponent,
    DefaultDisplayComponent,
    MychatsComponent,
    ChatHeadingComponent,
    ChatTextbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ChatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
