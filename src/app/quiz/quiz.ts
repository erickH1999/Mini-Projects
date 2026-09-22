import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-quiz',
  imports: [],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})
export class Quiz {


  // Define the questions for the quiz
  questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris',
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Jupiter', 'Saturn', 'Mars'],
      answer: 'Jupiter',
    },
    {
      question: 'What is the chemical symbol for gold?',
      options: ['Au', 'Ag', 'Fe', 'Hg'],
      answer: 'Au',
    },
  ];

  // Define signals to track the current question index, score, and whether the quiz is finished
  currentIndex = signal(0);
  score = signal(0);
  finished = signal(false);

  // Define a signal to track the current question based on the current index
  currentQuestion = computed(() => this.questions[this.currentIndex()]);


  answer(option: string) {
    // Check if the selected option is correct
    if (option === this.currentQuestion().answer) {
      this.score.update(s => s + 1); // Increment the score if the answer is correct  
    }

    if (this.currentIndex() < this.questions.length - 1) {
      this.currentIndex.update(i => i + 1); // Move to the next question
    } else {
      this.finished.set(true); // Mark the quiz as finished if all questions are answered
    }
  }


  restart() {
    this.currentIndex.set(0); // Reset the current question index
    this.score.set(0); // Reset the score
    this.finished.set(false); // Reset the finished state
  }
}
