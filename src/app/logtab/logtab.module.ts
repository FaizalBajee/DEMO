import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogtabPageRoutingModule } from './logtab-routing.module';

import { LogtabPage } from './logtab.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogtabPageRoutingModule, RouterModule.forChild([{ path: 'main', component: LogtabPage }])
  ],
  declarations: [LogtabPage]
})
export class LogtabPageModule { }
