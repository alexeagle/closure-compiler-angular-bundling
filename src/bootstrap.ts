import {platformBrowser} from '@angular/platform-browser';
import {AppModuleNgFactory} from './app.module.ngfactory';
import {Basic} from './basic';

import 'rxjs/add/operator/first';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
