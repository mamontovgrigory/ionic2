import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AuthorizationService } from './authorization.service';

@Component({
  selector: 'page-authorization',
  templateUrl: 'authorization.html',
  providers: [AuthorizationService]
})
export class AuthorizationPage {
  @ViewChild('inputLogin') inputLogin;
  @ViewChild('inputPassword') inputPassword;

  login: string = '109000291';
  message: string = '';

  constructor(public nav: NavController, private authorizationService: AuthorizationService) {

  }

  logIn(login: string, password: string) {
    if (!login) {
      this.inputLogin.setFocus();
    } else if (!password) {
      this.inputPassword.setFocus();
    } else {
      this.authorizationService.logIn(login, password)
        .then((result) => {
          this.message = result ? '' : 'Wrong login or password';
          if (result) {
            this.nav.setRoot(HomePage);
          }
        });
    }
  }

}
