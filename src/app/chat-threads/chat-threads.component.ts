import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { ThreadsService } from '../thread/thread.service';

@Component({
    selector: 'chat-threads',
    templateUrl: 'chat-threads.component.html'
})

export class ChatThreadsComponent implements OnInit {
    threads: Observable<any[]>;

    constructor(
        public threadsService: ThreadsService,
    ) {}

    ngOnInit() {
        this.threads = this.threadsService.orderedThreads;
    }
}