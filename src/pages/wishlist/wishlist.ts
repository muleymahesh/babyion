import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { HttpClient } from '@angular/common/http';


/**
 * Generated class for the WishlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html',
})
export class WishlistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,public restProvider: RestProvider) {
 this.wishlist1();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WishlistPage');
  }
  wlist: any;
  request= {
method:'get_fav',
user_id:'muley.mahesh@gmail.com'
  };
 wishlist1() {
    this.restProvider.login(this.request)
    .then(data => {
      this.wlist = data;
      console.log(this.wlist);
    });
  }
}
