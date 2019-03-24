import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  imports: [CommonModule, NgbModule, SearchRoutingModule],
  declarations: [ SearchComponent ],
  exports: [SearchComponent]
})
export class SearchModule { }

