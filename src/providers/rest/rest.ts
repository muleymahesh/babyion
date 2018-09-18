import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }
  login(data) {
    return new Promise((resolve, reject) => {
      this.http.post("http://localhost/baby/ws/v2/api1.php", JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  register(data) {
    return new Promise((resolve, reject) => {
      this.http.post("http://localhost/baby/ws/v2/api1.php", JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getWishlist(data) {
    return new Promise((resolve, reject) => {
      this.http.post("http://localhost/baby/ws/v2/api1.php", JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getBanner(data) {
    return new Promise((resolve, reject) => {
      this.http.post("http://localhost/baby/ws/v2/api1.php", JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  getRecommendations(data) {
    return new Promise((resolve, reject) => {
      this.http.post("http://localhost/baby/ws/v2/api1.php", JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  getBrands(data) {
    return new Promise((resolve, reject) => {
      this.http.post("http://localhost/baby/ws/v2/api1.php", JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getOffers(data) {
    return new Promise((resolve, reject) => {
      this.http.post("http://localhost/baby/ws/v2/api1.php", JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  getAgeGroup(data) {
    return new Promise((resolve, reject) => {
      this.http.post("http://localhost/baby/ws/v2/api1.php", JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  
  getCategories(data) {
    return new Promise((resolve, reject) => {
      this.http.post("http://localhost/baby/ws/v2/api1.php", JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
 

 

}


