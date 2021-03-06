import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthorizationPage } from '../pages/authorization/authorization';
import { HomePage } from '../pages/home/home';
import { TodoPage } from '../pages/todo/todo';
import { CameraPage } from '../pages/camera/camera';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = AuthorizationPage;

  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //statusBar.styleDefault();
      //splashScreen.hide();
    });
  }

  pages: any[] = [
    {title: 'Home', component: HomePage},
    {title: 'Todo', component: TodoPage},
    {title: 'Camera', component: CameraPage}
  ];

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

