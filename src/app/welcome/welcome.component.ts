import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit { 
  localstor : any
  constructor(private router: Router) {}

  ngOnInit() {
    this.localstor = localStorage.getItem('InstalationKey');
    console.log(this.localstor);
    if(this.localstor == null){
      setTimeout(() => {
        this.router.navigate(['/wifiSel']);
      }, 6000);
    }else{
      setTimeout(() => {
        this.router.navigate(['/mainPage']);
      }, 6000);
    }
  } 
}

  
   