import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  token = "";
  isSuper: any;
  constructor() {
    this.getToken();
  }
  isAuthorized = () => {
    return localStorage.AccessToken ? true : false;
  };
  getToken = () => {
    this.token = localStorage.AccessToken;
    return localStorage.AccessToken ? localStorage.AccessToken : null;
  };
  removeToken = () => {
    this.token = "";
    localStorage.clear();
  };
  issuper = () => {
    this.isSuper = localStorage.isSuper;
    const returnVal = !["", undefined, null].includes(this.isSuper)
      ? this.isSuper === "true"
        ? true
        : false
      : false;
    return returnVal ? true : false;
  };
}
