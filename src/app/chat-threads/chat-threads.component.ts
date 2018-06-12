import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';

@Component({
    selector: 'chat-threads',
    templateUrl: 'chat-threads.component.html'
})

export class ChatThreadsComponent implements OnInit {
    threads: Observable<any[]>;

    constructor() { }

    ngOnInit() {
        this.threads = from([[
            {a: 1},
            {b: 1},
            {c: 1},
            {d: 1},
        ]]);
    }
}