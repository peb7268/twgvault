import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SettingsPage } from '../../pages/settings/settings';

/**
 * Generated class for the AgentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agents',
  templateUrl: 'agents.html',
})
export class AgentsPage {
  tabIdx: number;
  tab1: any;
  tab2: any;
  tab3: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = SettingsPage;
    this.tab2 = SettingsPage;
    this.tab3 = SettingsPage;
    this.tabIdx = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgentsPage');
  }

}
