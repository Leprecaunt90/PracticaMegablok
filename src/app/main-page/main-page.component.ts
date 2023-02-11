import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{
  localstor : any
  ngOnInit(): void {
    this.localstor = localStorage.getItem('InstalationKey');
    console.log(this.localstor);
  }
  

}
