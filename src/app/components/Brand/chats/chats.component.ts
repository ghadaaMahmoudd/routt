import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chats.service';
interface Message {
  sender: string;
  text: string;
  time: string;
  isCurrentUser: boolean;
}

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css'],
})
export class ChatsComponent implements OnInit {
  messages: Message[] = [];
  newMessage: string = '';
  currentUser: string = 'Basma Badr';

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.receiveMessage().subscribe((message: Message) => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      const message: Message = {
        sender: this.currentUser,
        text: this.newMessage,
        time: new Date().toLocaleTimeString(),
        isCurrentUser: true,
      };

      this.chatService.sendMessage(message);
      this.messages.push(message);
      this.newMessage = '';
    }
  }
}
