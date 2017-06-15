import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AuthorizationService {
  private loginHttp: string = 'http://ellco.dev.altlan.ru/api/Account/Login';

  constructor(private http: Http) {
  }

  public logIn(login: string, password: string): Promise<boolean> {
    const data = {
      authType: 0,
      login,
      password
    };
    return this.http.post(this.loginHttp, data)
      .toPromise()
      .then(response => response.json().data)
      .then((response) => {
        return !!(response && response.token);
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
