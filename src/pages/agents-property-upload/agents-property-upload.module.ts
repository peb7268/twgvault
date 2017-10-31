import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgentsPropertyUploadPage } from './agents-property-upload';

@NgModule({
  declarations: [
    AgentsPropertyUploadPage,
  ],
  imports: [
    IonicPageModule.forChild(AgentsPropertyUploadPage),
  ],
})
export class AgentsPropertyUploadPageModule {}
