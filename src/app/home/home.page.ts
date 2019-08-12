import { Component, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {QuizService} from 'src/app/servece/quiz.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
results;
time;
question;
@ViewChild('slides')slides:any;
score1=0;
answer;
hasanswared:boolean=false;
correct:boolean;


public form = [
  { value: 'correct1', isChecked: true },
  { value: 'correct2', isChecked: false },
  { value: 'correct3', isChecked: false }
];


  constructor(private service:QuizService,private router:Router,private queryrouter:ActivatedRoute) {

    this.service.getQuiz().subscribe(data=>{
      this.question=data;
      this.time=this.question.results;
      this.answer=this.question.results;
      console.log(data)
    });
    
  }

  // nextSlide(){
  //   this.slides.slideNext()
  // }
  

  submit()
{
  
  this.router.navigate(['/results'], { queryParams: {score1:this.score1}});
  
}

select1(){  
  console.log(this.score1 +=0)
if(this.hasanswared=true){
  // this.nextSlide();
}
}

select2(){ 
  console.log(this.score1 +=1)
  if(this.hasanswared=true){
    // this.nextSlide();
  }
}

select3(){  
  console.log(this.score1 +=0)
  if(this.hasanswared=true){
    // this.nextSlide();
  }

}

select4(){
  console.log(this.score1 +=0)
  if(this.hasanswared=true){
    // this.nextSlide();
  }
}


// nextSlide(){
//   this.slides.lockSwipes(false);
//   this.slides.lockSwipes();
//   this.slides.lockSwipes(true);
// }

ngOnInit() {

 

  
   

}


}




