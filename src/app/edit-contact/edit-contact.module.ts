import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditContactPageRoutingModule } from './edit-contact-routing.module';

import { EditContactPage } from './edit-contact.page';
import { LogPage } from '../log/log.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditContactPageRoutingModule
  ],
  providers:[LogPage],
  declarations: [EditContactPage]
})
export class EditContactPageModule {}
