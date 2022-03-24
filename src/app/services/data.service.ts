import { environment } from "./../../environments/environment";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class DataService {
  baseurl = environment.apiBaseUrl;
  url = this.baseurl + "api/admin";
  APIList = {
    login: this.url + "/login",
    createAdmin: this.url + "/createAdmin",
    admin: this.url + "/getDetails",
    adminDelete: this.url + `/deleteAdmin`,
    count: this.url + "/getCount",
    users: this.url+ "/allUsers"
  };
  constructor(private http: HttpClient) {}
  loginSubmit(data: any): Observable<any> {
    return this.http.post(this.APIList.login, data);
  }
  addAdmin(param): Observable<any> {
    return this.http.post(this.APIList.createAdmin, param);
  }
  getAdmin(): Observable<any> {
    return this.http.get(this.APIList.admin);
  }
  deleteAdmin(id): Observable<any> {
    return this.http.get(this.APIList.adminDelete + `/${id}`);
  }
  getUsers():Observable<any>{
    return this.http.get(this.APIList.users);
  }
}
