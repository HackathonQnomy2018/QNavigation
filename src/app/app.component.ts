import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, NavigationEnd } from '@angular/router';
import { tap, filter, map, switchMap } from 'rxjs/operators';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private api: ApiServiceService
  ) {

    this.router.events.pipe(
      filter(val => val instanceof NavigationEnd ),
      tap(val => console.log(val)),
      map((val: NavigationEnd ) => val.url.replace(/[?&]/gi, ' ').split(' ').filter(v => v.indexOf('=') > 0)),
      tap(val => console.log(val)),
      switchMap(params => {


        return this.api.connect(params.find(v => v.indexOf('locationId') >= 0));
      })

    ).subscribe();

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
