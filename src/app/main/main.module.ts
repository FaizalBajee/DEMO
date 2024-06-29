import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { RouterModule } from '@angular/router';
import { HometabPage } from '../hometab/hometab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule, RouterModule.forChild([{ path: 'main', component: MainPage }])
  ],
  declarations: [MainPage]
})
export class MainPageModule {}
