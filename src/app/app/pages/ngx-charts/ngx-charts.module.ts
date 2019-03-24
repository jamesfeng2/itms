import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { NGXChartsComponent } from './ngx-charts.component';
import { NgxChartsRoutingModule } from './ngx-charts-routing.module';

@NgModule({
  imports: [CommonModule, NgbModule, NgxChartsModule, NgxChartsRoutingModule],
  declarations: [ NGXChartsComponent ],
  exports: [NGXChartsComponent]
})
export class NgrxChartsModule { }

