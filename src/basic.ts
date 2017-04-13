import {Component, Injectable} from '@angular/core';

import 'moment';
declare var moment: any;

@Component({
  selector: 'basic',
  templateUrl: './basic.ng.html',
})
export class Basic {
  ctxProp: string;
  constructor() { this.ctxProp = moment().format('dddd'); }
}
