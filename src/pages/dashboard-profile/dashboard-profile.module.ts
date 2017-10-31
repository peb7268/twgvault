import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardProfilePage } from './dashboard-profile';

@NgModule({
  declarations: [
    DashboardProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(DashboardProfilePage),
  ],
})
export class DashboardProfilePageModule {}
