import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  FirstName="";
  LastName="";
  Email="";
  date;

  constructor(private router:Router) { }


sport()
{
  console.log(this.FirstName,this.LastName,this.Email,this.date); 
  this.router.navigate(['/home'],{ queryParams: {FirstName:this.FirstName,LastName:this.LastName,Email:this.Email,date:this.date}});

}

secondQuizz(){

  console.log(this.FirstName,this.LastName,this.Email,this.date); 
  this.router.navigate(['/secondquizz'],{ queryParams: {FirstName:this.FirstName,LastName:this.LastName,Email:this.Email,date:this.date}});

}

thirdQuiz(){

  console.log(this.FirstName,this.LastName,this.Email,this.date); 
  this.router.navigate(['/thirdqiuz'],{ queryParams: {FirstName:this.FirstName,LastName:this.LastName,Email:this.Email,date:this.date}});

}



  ngOnInit() {

    
  }



}
