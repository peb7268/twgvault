import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WhyPage } from '../pages/why/why';
import { ContactPage } from '../pages/contact/contact';
import { LoginPage } from '../pages/login/login';
import { SampleAuthedRoutePage } from '../pages/sample-authed-route/sample-authed-route';

import { SettingsPage } from '../pages/settings/settings';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { BuyersPage } from '../pages/buyers/buyers';
import { AgentsPage } from '../pages/agents/agents';

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
    BuyersPage,
    AgentsPage
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
    BuyersPage,
    AgentsPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
