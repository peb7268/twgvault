import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WhyPage } from '../pages/why/why';
import { ContactPage } from '../pages/contact/contact';
import { LoginPage } from '../pages/login/login';

import { SettingsPage } from '../pages/settings/settings';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { DashboardStatsPage } from '../pages/dashboard-stats/dashboard-stats';
import { DashboardProfilePage } from '../pages/dashboard-profile/dashboard-profile';

import { BuyersPage } from '../pages/buyers/buyers';
import { BuyersViewListingsPage } from '../pages/buyers-view-listings/buyers-view-listings';
import { BuyersOffMarketPage } from '../pages/buyers-off-market/buyers-off-market';
import { BuyersBulkPage } from '../pages/buyers-bulk/buyers-bulk';

import { AgentsPage } from '../pages/agents/agents';
import { AgentsHotsheetPage } from '../pages/agents-hotsheet/agents-hotsheet';
import { AgentsPropertyUploadPage } from '../pages/agents-property-upload/agents-property-upload';
import { AgentsBulkCsvPage } from '../pages/agents-bulk-csv/agents-bulk-csv';
import { SearchPage } from '../pages/search/search';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WhyPage,
    LoginPage,
    ContactPage,
    SettingsPage,
    DashboardPage,
    DashboardStatsPage,
    DashboardProfilePage,
    BuyersPage,
    BuyersOffMarketPage,
    BuyersViewListingsPage,
    BuyersBulkPage,
    AgentsPage,
    AgentsHotsheetPage,
    AgentsPropertyUploadPage,
    AgentsBulkCsvPage,
    SearchPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WhyPage,
    LoginPage,
    ContactPage,
    DashboardPage,
    DashboardStatsPage,
    DashboardProfilePage,
    BuyersPage,
    BuyersOffMarketPage,
    BuyersViewListingsPage,
    BuyersBulkPage,
    AgentsPage,
    SettingsPage,
    AgentsHotsheetPage,
    AgentsPropertyUploadPage,
    AgentsBulkCsvPage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
