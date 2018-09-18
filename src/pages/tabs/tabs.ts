import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { WishlistPage } from '../wishlist/wishlist';
import { Home1Page } from '../home1/home1';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Home1Page;
  tab2Root = RegisterPage;
  tab3Root = WishlistPage;
  

  constructor() {

  }
}
