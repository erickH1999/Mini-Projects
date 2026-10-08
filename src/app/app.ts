import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Stopwatch } from "./stopwatch/stopwatch";
import { Quiz } from "./quiz/quiz";
import { PasswordGenerator } from './password-generator/password-generator';
import { ChatUi } from './chat-ui/chat-ui';

@Component({
  selector: 'app-root',
  imports: [Stopwatch, Quiz, PasswordGenerator, ChatUi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Mini-Projects');
}
