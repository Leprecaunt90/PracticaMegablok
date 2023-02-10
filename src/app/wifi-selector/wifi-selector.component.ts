import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wifi-selector',
  templateUrl: './wifi-selector.component.html',
  styleUrls: ['./wifi-selector.component.css']
})
export class WifiSelectorComponent implements OnInit {
 userInfo: any;
 constructor(private http: HttpClient){}
  ngOnInit(): void {
    const url: string = 'https://raw.githubusercontent.com/lbernalsierra/FakeAPI/main/Networks.json';
    this.http.get(url).subscribe((response) =>{
      this.userInfo = response;
      console.log(this.userInfo.networks)
    });
  } 
  
}


