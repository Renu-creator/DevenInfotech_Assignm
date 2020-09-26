import { Injectable } from '@angular/core';
import{HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonServService {

 private var:HttpClient;

  constructor(httpvar:HttpClient) {
  
   this.var=httpvar;
   }

  

  chkLogin()
  {
    return this.var.get("./assets/login.json");
  }

}
