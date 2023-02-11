import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wifi-selector',
  templateUrl: './wifi-selector.component.html',
  styleUrls: ['./wifi-selector.component.css']
})
export class WifiSelectorComponent implements OnInit {
 userInfo: any;
 data: any
 html : any
 @ViewChild('wifis') myNameElem: any;
 
 constructor(private http: HttpClient, private router: Router){}

  ngOnInit(): void {
    const url: string = 'https://raw.githubusercontent.com/lbernalsierra/FakeAPI/main/Networks.json';
    this.http.get(url).subscribe((response) =>{
      this.userInfo = response;
      this.data = this.userInfo.networks
      this.html = ""
    });
  } 
   goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
}


