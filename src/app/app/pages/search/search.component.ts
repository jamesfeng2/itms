import { Component, OnInit } from '@angular/core';
import * as myScripts from '../../../assets/js/some-scripts';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    myScripts.re();
  }

}
