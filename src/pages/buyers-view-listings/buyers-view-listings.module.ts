import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyersViewListingsPage } from './buyers-view-listings';

@NgModule({
  declarations: [
    BuyersViewListingsPage,
  ],
  imports: [
    IonicPageModule.forChild(BuyersViewListingsPage),
  ],
})
export class BuyersViewListingsPageModule {}
