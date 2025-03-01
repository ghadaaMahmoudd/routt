import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket = io('api link');

  sendMessage(message: any): void {
    this.socket.emit('message', message);
  }

  receiveMessage(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('message', (msg: any) => {
        observer.next(msg);
      });
    });
  }
}

