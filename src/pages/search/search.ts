import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MockProperySearch } from '../../assets/js/mocks/property.search.SD_1'
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  private listings;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(MockProperySearch);
    this.listings = MockProperySearch;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

}
