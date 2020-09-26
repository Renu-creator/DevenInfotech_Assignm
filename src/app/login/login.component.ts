import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServService } from '../common-serv.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private rt: Router, private servvar: CommonServService) { }

  title = "Welcome User";
  LoginModel: any = {};
  details: any;

  onSubmit() {  
   

    this.servvar.chkLogin().subscribe(data => {

     
      this.details = data;
     
      for (let i = 0; i < this.details.length; i++) {
        if (this.details[i].unm == this.LoginModel.unm && this.details[i].pwd == this.LoginModel.pwd) {
          alert("Login Successful....");
          this.rt.navigate(['/dashboard']);
        }

        else {
          alert("Please Enter Valid Username and Password")
          this.LoginModel = {};
        }
      }
    })

  }

  ngOnInit() {

  }

}
