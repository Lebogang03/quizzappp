import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private quize:HttpClient) { }

  getQuiz()
  {
    return this.quize.get('https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple');
  }

  secquiz()
  {
    return this.quize.get('https://opentdb.com/api.php?amount=10&type=multiple');
  }

  thirdquiz()
  {
    return this.quize.get('https://opentdb.com/api.php?amount=10&category=9&type=multiple');
  }
}
