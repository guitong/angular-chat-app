import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message/message.model';
import { User } from '../user/user.model';
import { UsersService } from '../user/user.service';

@Component({
    selector: 'chat-message',
    templateUrl: 'chat-message.component.html'
})

export class ChatMessageComponent implements OnInit {
    @Input() message: Message;
    currentUser: User;
    incoming: boolean;

    constructor(public UsersService: UsersService) { }

    ngOnInit(): void {
        this.UsersService.currentUser
            .subscribe(
                (user: User) => {
                    this.currentUser = user;
                    if (this.message.author && user) {
                        this.incoming = this.message.author.id !== user.id;
                    }
                }
            );
    }
}