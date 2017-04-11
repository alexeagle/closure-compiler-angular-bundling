
import 'moment';

import {Component, Injectable} from '@angular/core';
import * as moment_type from 'moment';
declare var moment: typeof moment_type;
import * as jsCookie from 'js-cookie';

@Component({
  selector: 'basic',
  templateUrl: './basic.ng.html',
})
@Injectable()
export class Basic {
  ctxProp: string;
  constructor() {
    document.cookie = 'cookie=true';
    this.ctxProp = jsCookie.get('cookie');
  }
}
