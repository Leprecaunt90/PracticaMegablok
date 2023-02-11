import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{
  localstor : any
  //we get the local storage and see wich is your key
  ngOnInit(): void {
    this.localstor = localStorage.getItem('InstalationKey');
  }
}
