import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SampleAuthedRoutePage } from './sample-authed-route';

@NgModule({
  declarations: [
    SampleAuthedRoutePage,
  ],
  imports: [
    IonicPageModule.forChild(SampleAuthedRoutePage),
  ],
})
export class SampleAuthedRoutePageModule {}
