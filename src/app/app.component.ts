import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { WhyPage } from '../pages/why/why';
import { LoginPage } from '../pages/login/login';
import { ContactPage } from '../pages/contact/contact';

import { DashboardPage } from '../pages/dashboard/dashboard';
import { BuyersPage } from '../pages/buyers/buyers';
import { AgentsPage } from '../pages/agents/agents';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  loggedIn: boolean = true;
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;
  AuthedPages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'home', component: HomePage },
      { title: 'why TWG', component: WhyPage },
      { title: 'contact us', component: ContactPage },
      { title: 'login', component: LoginPage }
    ];
    
    this.AuthedPages = [
      { title: 'Dashboard', component: DashboardPage },
      { title: 'Buyers', component: BuyersPage },
      { title: 'Agents', component: AgentsPage }
    ]
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
