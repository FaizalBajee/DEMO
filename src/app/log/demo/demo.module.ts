import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { LogPage } from '../log.page';


@NgModule({
  declarations: [DemoComponent,LogPage],
  imports: [
    CommonModule
  ]
})
export class DemoModule { }
