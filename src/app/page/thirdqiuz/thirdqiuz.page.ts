import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/servece/quiz.service';

@Component({
  selector: 'app-thirdqiuz',
  templateUrl: './thirdqiuz.page.html',
  styleUrls: ['./thirdqiuz.page.scss'],
})
export class ThirdqiuzPage implements OnInit {

info
first
@ViewChild('slides')slides:any;
score3=0;
answer;

FirstName;
LastName;
date;
hasanswared;

  constructor(private router:Router,private ser:QuizService,private queryrouter:ActivatedRoute) {

    this.ser.thirdquiz().subscribe(data=>{
      this.info=data;
this.first=this.info.results;
      this.answer=this.info.results;
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

  thirdquiz1(){  
    console.log(this.score3 +=1)
    if(this.hasanswared=true){
      this.nextSlide();
    }
    
    }
    
    thirdquiz2(){ 
    console.log(this.score3 +=0)
 
}

thirdquiz()
 {
  console.log(this.score3,this.FirstName,this.LastName,this.date); 
  this.router.navigate(['/results'], { queryParams: {score1:this.score3,FirstName:this.FirstName,LastName:this.LastName,date:this.date}});
 }

}
