import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyersPage } from './buyers';

@NgModule({
  declarations: [
    BuyersPage,
  ],
  imports: [
    IonicPageModule.forChild(BuyersPage),
  ],
})
export class BuyersPageModule {}
