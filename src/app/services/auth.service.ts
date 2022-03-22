import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = '';
  issuper: any;
  constructor() {
    this.getToken();
  }
  isAuthorized = () => {
    return localStorage.AccessToken ? true : false;
  }
  getToken = () => {
    this.token = localStorage.AccessToken;
    return localStorage.AccessToken ? localStorage.AccessToken : null;
  }
  removeToken = () => {
    this.token = '';
    localStorage.clear();
  }
  isSuper = () => {
    this.issuper = localStorage.activity;
    const returnVal = !['', undefined, null].includes(this.issuper)
      ? this.issuper === 'true' ? true : false : false;
    return returnVal ? true : false;
  }
}
