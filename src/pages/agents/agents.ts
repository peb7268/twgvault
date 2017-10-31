import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AgentsHotsheetPage } from '../../pages/agents-hotsheet/agents-hotsheet';
import { AgentsPropertyUploadPage } from '../../pages/agents-property-upload/agents-property-upload';
import { AgentsBulkCsvPage } from '../../pages/agents-bulk-csv/agents-bulk-csv';
import { SearchPage } from '../../pages/search/search';


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
  tab4: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = SearchPage;
    this.tab2 = AgentsHotsheetPage;
    this.tab3 = AgentsBulkCsvPage;
    this.tab4 = AgentsPropertyUploadPage
    ;
    this.tabIdx = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgentsPage');
  }

}
