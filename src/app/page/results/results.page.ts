import { Component, OnInit, Input } from '@angular/core';
import {QuizService} from 'src/app/servece/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  results;
time;
question;

score1=0;
score2=0;
score3=0;

@Input() FirstName;
@Input() LastName;
@Input() Email;
@Input() date;



  constructor(private service:QuizService, private router:ActivatedRoute,private routerr:Router) {

    this.service.getQuiz().subscribe(data=>{
      this.results=data;
      this.time=this.results.list;
      console.log(data)
    });
    
  }

 

  ngOnInit() {

    this.router.queryParams
    .subscribe(params => {
      console.log(params); 
      this.score1 = params.score1;
      console.log(this.score1);
    });

    this.router.queryParams
    .subscribe(params => {
      console.log(params); 
      this.score2= params.score2;
      console.log(this.score2);
    });

    this.router.queryParams
    .subscribe(params => {
      console.log(params); 
      this.score3= params.score3;
      console.log(this.score3);
    });

    this.router.queryParams
    .subscribe(params => {
      console.log(params); 
      this.FirstName= params.FirstName,
      this.LastName= params.LastName,
      this.Email= params.Email;
      this.date= params.date;
      console.log(this.FirstName,this.LastName,this.Email,this.date);
    });

   
  }

  homepage(){
    this.routerr.navigateByUrl('homepage')
  }

}

