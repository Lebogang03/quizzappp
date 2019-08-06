import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/servece/quiz.service';

@Component({
  selector: 'app-secondquizz',
  templateUrl: './secondquizz.page.html',
  styleUrls: ['./secondquizz.page.scss'],
})
export class SecondquizzPage implements OnInit {

  details;
  second;
display;
  @ViewChild('slides')slides:any;
  score2=0;
  answer;
  hasanswared
  FirstName="";
  LastName="";
  
  date;
  constructor(private serv:QuizService,private router:Router,private queryrouter:ActivatedRoute) {

    this.serv.secquiz().subscribe(data=>{
      this.display=data;
      this.second=this.display.results;
      this.answer=this.display.results;
      console.log(data)
    });
    
   }

   nextSlide(){
    this.slides.slideNext()
  }
  


  ngOnInit() {

    this.queryrouter.queryParams
    .subscribe(params => {
      console.log(params); 
      this.FirstName= params.FirstName,
      this.LastName= params.LastName,
      this.date= params.date;
      console.log(this.FirstName,this.LastName,this.date);
    });



  }
  secquiz1(){  
    console.log(this.score2 +=1)
    if(this.hasanswared=true){
      this.nextSlide();
    }
    
    }
    
    secquiz2(){ 
    console.log(this.score2 +=0)
    if(this.hasanswared=true){
      this.nextSlide();
    }
 
}

quizsubmit()
 {
  console.log(this.score2,this.FirstName,this.LastName,this.date); 
  this.router.navigate(['/results'], { queryParams: {score1:this.score2,FirstName:this.FirstName,LastName:this.LastName,date:this.date}});

 }
}