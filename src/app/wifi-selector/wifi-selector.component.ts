import { Component, OnInit, } from '@angular/core';
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
 validate : any
 spinner ='hidden'
 
 constructor(private http: HttpClient, private router: Router){}

 //get json from wifis list
  ngOnInit(): void {
    const url = 'https://raw.githubusercontent.com/lbernalsierra/FakeAPI/main/Networks.json';
    this.http.get(url).subscribe((response) =>{
      this.userInfo = response;
      this.data = this.userInfo.networks
      this.html = ""
    });
  } 
  //function to check the wifi and go next step from form
  submit(wifiForm: any){
    console.log(wifiForm.value)
    //we can use this pass to validate on backend
    var passwd = wifiForm.value.wifiPass 
    if(passwd != ''){
      this.spinner = "visible"
      const url = 'https://raw.githubusercontent.com/lbernalsierra/FakeAPI/main/SetWifi.json';
      this.http.get(url).subscribe((response) =>{
        this.validate =  response
        if(this.validate.valid == true){
          setTimeout(() => {
            this.router.navigate(['/instalKey']);
          }, 3000);
        }
      });
    }
    
  }
}


