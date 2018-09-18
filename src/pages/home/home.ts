import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { RegisterPage } from '../register/register';
//import { Http } from '@angular/http'; 
import { RestProvider } from '../../providers/rest/rest';
//import { HttpClient } from '@angular/common/http/src/client';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  constructor(public navCtrl: NavController,public http: HttpClient,public restProvider: RestProvider) {

  }
  users: any;
  todo = {
    method:'login',
    email: '',
    password: ''
  };
  login() {
    this.restProvider.login(this.todo)
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }
  getSignup(){
    this.navCtrl.push(RegisterPage);
  }
 
        
    

getRegister(){
  
  
   this.navCtrl.push(RegisterPage);
  }
  
  }
