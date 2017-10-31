import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardStatsPage } from './dashboard-stats';

@NgModule({
  declarations: [
    DashboardStatsPage,
  ],
  imports: [
    IonicPageModule.forChild(DashboardStatsPage),
  ],
})
export class DashboardStatsPageModule {}
