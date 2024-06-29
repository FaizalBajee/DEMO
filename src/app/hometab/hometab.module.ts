import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HometabPageRoutingModule } from './hometab-routing.module';

import { HometabPage } from './hometab.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HometabPageRoutingModule, RouterModule.forChild([{ path: 'main', component: HometabPage }])
  ],
  declarations: [HometabPage]
})
export class HometabPageModule { }
