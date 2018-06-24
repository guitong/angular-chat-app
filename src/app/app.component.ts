import { Component } from '@angular/core';
import { MessagesService } from './message/message.service';
import { ThreadsService } from './thread/thread.service';
import { UsersService } from './user/user.service';
import { ChatExampleData } from './data/chat-example-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public messagesService: MessagesService,
    public threadsService: ThreadsService,
    public usersService: UsersService
  ) {
    ChatExampleData.init(messagesService, threadsService, usersService);
  }
}
