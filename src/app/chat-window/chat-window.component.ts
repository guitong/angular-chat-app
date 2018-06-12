import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';

@Component({
    selector: 'chat-window',
    templateUrl: 'chat-window.component.html'
})

export class ChatWindowComponent implements OnInit {
    messages: Observable<any[]>;

    constructor() { }

    ngOnInit() {
        this.messages = from([
            [
                {a: 1},
                {a: 1},
                {a: 1},
                {a: 1},
            ]
        ]);
    }
}