import { Component, signal } from '@angular/core';
import { start } from 'repl';

@Component({
  selector: 'app-stopwatch',
  imports: [],
  templateUrl: './stopwatch.html',
  styleUrl: './stopwatch.css',
})
export class Stopwatch {
   
  // The time signal to keep track of the elapsed time
  time = signal(0);
  interval: any;
  
  // Method to start the stopwatch
  start() {
    this.interval = setInterval(() => {

      this.time.update(v => v + 1);
    }, 1000);
  }

  // Method to stop the stopwatch
  stop() {
    clearInterval(this.interval);
  }

  // Method to reset the stopwatch
  reset() {
    this.stop();
    this.time.set(0);
  }
}
