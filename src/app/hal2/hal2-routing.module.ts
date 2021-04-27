import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hal2Page } from './hal2.page';

const routes: Routes = [
  {
    path: '',
    component: Hal2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hal2PageRoutingModule {}
