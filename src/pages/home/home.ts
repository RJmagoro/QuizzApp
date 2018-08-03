import { Component, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name: string; 
  digital: boolean;

  wronganswer;

  SumoWrestling:string;
  SumoWrestling1: string;

  maradona:string;
  maradona1:string;

 
  Renault:string;
  Renault1:string;

  pirates:string;
  pirates1:string;

  goal:string;
  goal1:string;//end of sports quiz
  // start of nature
  octopus:string ;
  octopus1:string;

  liver:string ;
  liver1:string;

  VitaminA:string;
  vitaminA1:string;

  Whaleshark:string ;
  whaleshark1:string;

  mars1:string ;
  mars:string;//end
  //start of tech 
  
  digital1:string;
  digitall:string;

  TextFile:string ;
  TextFile1:string;

  AURL:string;
  AURL1:string;
  www2:string;
  files1:string;
  OS:string;
  Os1:string;


  // end of tech
  // start of general
  fiji:string;
  fiji1:string;
  golf1;
 
  

  
  war1: string;
  war:string;

  yyY="gn3";
  president1:string;
  president:string;

  car;
  Year:string;
  yrrs:string;

  
  fott;Jpn;
   
  gn3;
  First: boolean = false;
  Sports: boolean = false;
  tech: boolean = false;
  Nature: boolean = false;
  resultt: boolean = false;
  general: boolean = false;
  Polotics:boolean = false;
 
  
  score = 0 ;
  total = 0;
 
  

  results:boolean=false;
  
  
  result: number;

  soccer;yr;cars;carr;
  ps;fot;fote;starr;


  constructor( public navCtrl: NavController) {
 
    this.First = true;
   
    
    
  }
 
  

  onDone(){
     this.general = false;
     
     this.resultt = true;   
   
    

    
if(this.SumoWrestling1 == "Jpn"){
  this.SumoWrestling = "You've Got it"
  this.score = this.score + 1;
  // console.log("------------sumi"+ this.score);
  
}else if (this.SumoWrestling1 == "Soccer"){
  this.SumoWrestling = "Incorrect Answer, Correct answer is:SumoWrestling"

}else if (this.SumoWrestling1 == "ps"){
  this.SumoWrestling = "Incorrect Answer, Correct answer is:SumoWrestling"
}

if(this.maradona1 == "maradona"){
  this.maradona = "You've Got it"
  this.score = this.score + 1;
   
}else if (this.maradona1 == "yr"){
  this.maradona = "Incorrect Answer, Correct answer is:Maradona"
}else if (this.maradona1 == "yrrs"){
  this.maradona = "Incorrect Answer, Correct answer is:Maradona"
}


if(this.Renault1 == "Renault"){
  this.Renault = "You've Got it"
  this.score = this.score + 1;
   
}else if (this.Renault1 == "cars"){
  this.Renault = "Incorrect Answer, Correct answer is:Renault"
}else if (this.Renault1 == "carr"){
  this.Renault = "Incorrect Answer, Correct answer is:Renault"
}

if(this.pirates1 == "pirates"){
  this.pirates = "You've Got it"
  this.score = this.score + 1;
   
}else if (this.pirates1 == "fot"){
  this.pirates = "Incorrect Answer, Correct answer is:1995"
}else if (this.pirates1 == "fote"){
  this.pirates = "Incorrect Answer, Correct answer is:1995"
}

if(this.goal1 == "goal"){
  this.goal = "You've Got it"
  this.score = this.score + 1;
  
}else if (this.goal1 == "starr"){
  this.goal = "Incorrect Answer, Correct answer is:S.Tshabalala"
}else if (this.goal1 == "starr"){
  this.goal = "Incorrect Answer, Correct answer is:S.Tshabalala"
}
//end Sports
// start of Nature
if(this.octopus1 == "octopus"){
  this.octopus ="You've Got it"
  this.score = this.score + 1;
}else if (this.octopus1 == "stamen"){
  this.octopus = "Incorrect Answer, Correct answer is:Octopus"
}else if (this.octopus1 == "roe"){
  this.octopus = "Incorrect Answer, Correct answer is:Octopus"
}
if(this.liver1 == "liver"){
  this.liver = "You've Got it"
  this.score = this.score + 1;

}else if (this.liver1 == "langus"){
  this.liver = "Incorrect Answer, Correct answer is:Liver"
}else if (this.liver1 == "kidney"){
  this.liver1 = "Incorrect Answer, Correct answer is:Liver"
}


if(this.vitaminA1 == "vitaminA"){
  this.VitaminA = "You've Got it"
  this.score = this.score + 1;

}else if (this.vitaminA1 == "VitaminB"){
  this.VitaminA = "Incorrect Answer, Correct answer is:Vitamin A"
}else if (this.vitaminA1 == "Vitaminc"){
  this.VitaminA = "Incorrect Answer, Correct answer is:Vitamin A"
}


if(this.whaleshark1 == "whaleshark"){
  this.Whaleshark = "You've Got it"
  this.score = this.score +1;

}else if (this.whaleshark1 == "white"){
  this.Whaleshark = "Incorrect Answer, Correct answer is:Whale Shark"
}else if (this.whaleshark1 == "python"){
  this.Whaleshark = "Incorrect Answer, Correct answer is:Whale Shark"
}


if(this.mars1 == "mars"){
  this.mars = "You've Got it"
  this.score = this.score +1;

}else if (this.mars1 == "venus"){
  this.mars = "Incorrect Answer, Correct answer is:Mars"
}else if (this.mars1 == "earth"){
  this.mars = "Incorrect Answer, Correct answer is:Mars"
}

//end of nature
//start of Tech Quiz
if(this.digital1 == "digitall"){
  this.digitall = "You've Got it"
  this.score =this.score +1;

}else if (this.digital1 == "data"){
  this.digitall = "Incorrect Answer, Correct answer is:Digital Versatile Disc"
}else if (this.digital1 == "datata"){
  this.digitall = "Incorrect Answer, Correct answer is:Digital Versatile Disc"
}

if(this.Os1 =="OS"){
  this.OS = "You've Got it"  
  this.score = this.score + 1;

}else if (this.Os1 == "opns"){
  this.OS = "Incorrect Answer, Correct answer is:Operating System"
}else if (this.Os1 == "oako"){
  this.OS = "Incorrect Answer, Correct answer is:Operating System"
}


if(this.AURL1 == "AURL"){
  this.AURL = "You've Got it"
  this.score = this.score +1;

}else if (this.AURL1 == "ata"){
  this.AURL = "Incorrect Answer, Correct answer is: A URL"
}else if (this.AURL1 == "atat"){
  this.AURL = "Incorrect Answer, Correct answer is:A URL"
}

if(this.files1 == "www2"){
  this.www2 = "You've Got it"
  this.score = this.score +1;

}else if (this.files1 == "store"){
  this.www2 = "Incorrect Answer, Correct answer is:TextFile"
}else if (this.files1 == "oako"){
  this.www2 = "Incorrect Answer, Correct answer is:TextFile"
}

//end
//start
if(this.fiji1 == "fiji"){
  this.fiji = "You've Got it"
  this.score = this.score +1;

}else if (this.fiji1 == "gol"){
  this.fiji = "Incorrect Answer, Correct answer is:Fiji"
}else if (this.fiji1 == "gofl"){
  this.fiji = "Incorrect Answer, Correct answer is:Fiji"
}
if(this.war1 == "war"){
  this.war = "You've Got it"
  this.score = this.score+1;

}else if (this.war1 == "was"){
  this.war = "Incorrect Answer, Correct answer is:1914"
}else if (this.war1 == "wae"){
  this.war = "Incorrect Answer, Correct answer is:1914"
}

if(this.president1 == "president"){
  this.president = "You've Got it"

  this.score = this.score +1;

}else if (this.president1 == "gn1"){
  this.president = "Incorrect Answer, Correct answer is:2002"
}else if (this.president1 == "gn2"){
  this.president = "Incorrect Answer, Correct answer is:2002"
}



    }
    onStart(){
    this.general =false;
     this.First = false;
     this.Sports = true;
   
    }
    onSport(){
      this.Sports = false;
      this.tech =  true;
    }
      
    onTech(){
      this.tech = false;
      this.Nature = true;
    }
    onNature(){
      this.Nature =false;
      this.general = true;
    
  }
    onGeneral(){
    this.general = false;
     this.resultt = true;

  }
  onBack(){
    
    this.general = false;
    this.First =true;
    
   }
  
  
  


}
