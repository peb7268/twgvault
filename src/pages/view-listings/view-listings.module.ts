import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewListingsPage } from './view-listings';

@NgModule({
  declarations: [
    ViewListingsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewListingsPage),
  ],
})
export class ViewListingsPageModule {}
