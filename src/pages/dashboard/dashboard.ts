import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DashboardStatsPage } from '../../pages/dashboard-stats/dashboard-stats';
import { DashboardProfilePage } from '../../pages/dashboard-profile/dashboard-profile';
import { SettingsPage } from '../../pages/settings/settings';
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  tabIdx: number;
  tab1: any;
  tab2: any;
  tab3: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = DashboardStatsPage;
    this.tab2 = DashboardProfilePage;
    this.tab3 = SettingsPage;
    this.tabIdx = navParams.data.tabIndex || 0;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
