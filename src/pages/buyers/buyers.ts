import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BuyersViewListingsPage } from '../../pages/buyers-view-listings/buyers-view-listings';
import { BuyersOffMarketPage } from '../../pages/buyers-off-market/buyers-off-market';
import { BuyersBulkPage } from '../../pages/buyers-bulk/buyers-bulk';


/**
 * Generated class for the BuyersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buyers',
  templateUrl: 'buyers.html',
})
export class BuyersPage {
  tabIdx: number;
  tab1: any;
  tab2: any;
  tab3: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = BuyersViewListingsPage;
    this.tab2 = BuyersOffMarketPage;
    this.tab3 = BuyersBulkPage;
    
    this.tabIdx = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyersPage');
  }

}
