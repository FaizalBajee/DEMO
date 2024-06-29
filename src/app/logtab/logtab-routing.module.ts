import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogtabPage } from './logtab.page';

const routes: Routes = [
  {
    path: '',
    component: LogtabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogtabPageRoutingModule {}
