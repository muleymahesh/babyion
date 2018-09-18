import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { HttpClient } from '@angular/common/http';


/**
 * Generated class for the Home1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home1',
  templateUrl: 'home1.html',
})
export class Home1Page {   
  
  slides:any[25];
  mySlide = {
    method:'get_all_banner'
    };
    price:any;
    discount:any;
    finalprice:any;
    rlist: any;
    request= {
  method:'get_recommended',
  
    };
  
  
    Brands:any;
    myBraands = {
      method:'get_all_brand'
      };

    agegroups:any;
    agegroup = {
      method:'get_all_agegroup'
    }; 

    categories:any;
    cateogry = {
      method:'get_all_category'
    }; 

    offers:any;
    offer = {
      method:'get_all_offers'
    }; 

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,public restProvider: RestProvider) {
  this.getBanner();
  this.wishlist1();
  this.getBrands();
  this.getAgeGruops();
  this.getCategory();
  this.getOffer();
  }
  

   

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home1Page');
  }
 



 wishlist1() {
    this.restProvider.getRecommendations(this.request)
    .then(data => {
      this.rlist = data;
      console.log(this.rlist);
    });

  }

 pricestrict()
 {
   for(let w of this.rlist)
   {
     if(w.per_discount!=0)
     {
       

      this. price=w.per_discount/100*w.mrp;
      this.finalprice=w.mrp-this.price;
      return this.finalprice;
    
    
     }
   }

 }

  getBanner() {
    this.restProvider.getBanner(this.mySlide)
    .then(data => {
      this.slides = data;
      console.log(this.slides);
    });
  }


  getBrands() {
    this.restProvider.getBrands(this.myBraands)
    .then(data => {
      this.Brands = data;
      console.log(this.Brands);
    });
  }
  getAgeGruops() {
    this.restProvider.getAgeGroup(this.agegroup)
    .then(data => {
      this.agegroups = data;
      console.log(this.agegroups);
    });
  }

  getCategory() {
    this.restProvider.getAgeGroup(this.cateogry)
    .then(data => {
      this.categories = data;
      console.log(this.categories);
    });
  }

  getOffer() {
    this.restProvider.getOffers(this.offer)
    .then(data => {
      this.offers = data;
      console.log(this.offers);
    });
  }

}
