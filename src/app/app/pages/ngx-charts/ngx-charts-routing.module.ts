import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NGXChartsComponent } from './ngx-charts.component';

const routes: Routes = [
  {
    path: '',
     component: NGXChartsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxChartsRoutingModule { }

