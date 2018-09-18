import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,public restProvider: RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  users: any;
  todo = {
    method:'signup',
    fname: '',
    lname:'',
    email:'',
    divice_token:'1',
    password: '',
    mobile:''
    };
    getReegister() {
      this.restProvider.register(this.todo)
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
    }
}
