import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  title = 'Registration Form';

  RegistrationModel: any = {};

  constructor() {  }

  onSubmit(regfrm) 
  {
    alert("User Registerd successfully");    

    console.log(JSON.stringify(regfrm.value));
    this.RegistrationModel={};
  }

  ngOnInit() {  }

}
