import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatPageComponent } from 'src/app/chat-page/chat-page.component';
import { ChatNavBarComponent } from 'src/app/chat-nav-bar/chat-nav-bar.component';
import { ChatWindowComponent } from 'src/app/chat-window/chat-window.component';
import { ChatThreadsComponent } from 'src/app/chat-threads/chat-threads.component';
import { ChatThreadComponent } from 'src/app/chat-thread/chat-thread.component';
import { ChatMessageComponent } from 'src/app/chat-message/chat-message.component';
import { MessagesService } from './message/message.service';
import { ThreadsService } from './thread/thread.service';
import { UsersService } from './user/user.service';
import { FromNowPipe } from './pipes/from-now.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChatPageComponent,
    ChatNavBarComponent,
    ChatWindowComponent,
    ChatThreadsComponent,
    ChatThreadComponent,
    ChatMessageComponent,
    FromNowPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    MessagesService, ThreadsService, UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
