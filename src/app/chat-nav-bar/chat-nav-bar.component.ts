import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../message/message.service';
import { ThreadsService } from '../thread/thread.service';
import { combineLatest } from 'rxjs/operators';
import { Message } from '../message/message.model';
import { Thread } from '../thread/thread.model';
import { reduce } from 'lodash';


@Component({
    selector: 'chat-nav-bar',
    templateUrl: 'chat-nav-bar.component.html'
})

export class ChatNavBarComponent implements OnInit {
    unreadMessagesCount: number;

    constructor(
        public messagesService: MessagesService,
        public threadsService: ThreadsService,
    ) { }

    ngOnInit(): void {
        this.messagesService.messages
            .pipe(
                combineLatest(
                    this.threadsService.currentThread,
                    (messages: Message[], currentThread: Thread) => {
                        return [currentThread, messages];
                    }
                )
            )
            .subscribe(([currentThread, messages]: [Thread, Message[]]) => {
                this.unreadMessagesCount =
                  reduce(
                    messages,
                    (sum: number, m: Message) => {
                      const messageIsInCurrentThread: boolean = m.thread &&
                        currentThread &&
                        (currentThread.id === m.thread.id);
                      // note: in a "real" app you should also exclude
                      // messages that were authored by the current user b/c they've
                      // already been "read"
                      if (m && !m.isRead && !messageIsInCurrentThread) {
                        sum = sum + 1;
                      }
                      return sum;
                    },
                    0);
              });
    }
}