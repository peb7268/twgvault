import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewBulkPackagesPage } from './view-bulk-packages';

@NgModule({
  declarations: [
    ViewBulkPackagesPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewBulkPackagesPage),
  ],
})
export class ViewBulkPackagesPageModule {}
