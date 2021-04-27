import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hal2PageRoutingModule } from './hal2-routing.module';

import { Hal2Page } from './hal2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hal2PageRoutingModule
  ],
  declarations: [Hal2Page]
})
export class Hal2PageModule {}
