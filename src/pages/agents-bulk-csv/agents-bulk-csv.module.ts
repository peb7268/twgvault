import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgentsBulkCsvPage } from './agents-bulk-csv';

@NgModule({
  declarations: [
    AgentsBulkCsvPage,
  ],
  imports: [
    IonicPageModule.forChild(AgentsBulkCsvPage),
  ],
})
export class AgentsBulkCsvPageModule {}
