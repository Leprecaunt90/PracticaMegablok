import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-instalation-key',
  templateUrl: './instalation-key.component.html',
  styleUrls: ['./instalation-key.component.css']
})
export class InstalationKeyComponent {
  validate : any
  spinner ='hidden'

  constructor(private http: HttpClient, private router: Router){}
  
  submit(keyForm: any){
    console.log(keyForm.value)
    var instalKey = keyForm.value.instalKey 
    //we can use this key to validate on backend
    localStorage.setItem('InstalationKey', instalKey)
    this.spinner = "visible"
    const url = 'https://raw.githubusercontent.com/lbernalsierra/FakeAPI/main/CheckLicense.json';
    this.http.get(url).subscribe((response) =>{
      this.validate =  response
      if(this.validate.valid == true){
        setTimeout(() => {
          this.router.navigate(['/mainPage']);
        }, 3000);
      }
    });
  }

}
