import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private quize:HttpClient) { }

  getQuiz()
  {
    return this.quize.get('https://opentdb.com/api.php?amount=6&category=21&difficulty=medium&type=boolean');
  }

  secquiz()
  {
    return this.quize.get('https://opentdb.com/api.php?amount=5&category=12&difficulty=easy&type=boolean');
  }

  thirdquiz()
  {
    return this.quize.get('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=boolean');
  }
}
