import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyersBulkPage } from './buyers-bulk';

@NgModule({
  declarations: [
    BuyersBulkPage,
  ],
  imports: [
    IonicPageModule.forChild(BuyersBulkPage),
  ],
})
export class BuyersBulkPageModule {}
