import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-chat-ui',
  imports: [],
  templateUrl: './chat-ui.html',
  styleUrl: './chat-ui.css',
})
export class ChatUi {

  // Array to store chat messages
  messages = signal<string[]>([]);

  // Sends a chat message
  send(msg: string) {
    if (!msg.trim()) return;
    this.messages.update(list => [...list, msg]);
  }
}
