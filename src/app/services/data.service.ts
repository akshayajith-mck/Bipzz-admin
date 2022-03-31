import { environment } from "./../../environments/environment";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class DataService {
  baseurl = environment.apiBaseUrl;
  url = this.baseurl + "api";
  APIList = {
    login: this.url + "/admin/login",
    createAdmin: this.url + "/admin/createAdmin",
    admin: this.url + "/admin/all",
    adminDelete: this.url + `/admin/deleteAdmin`,
    count: this.url + "/admin/getCount",
    users: this.url+ "/admin/allUsers",
    sendNot:this.url +"/v1/createNotification"
  };
  constructor(private http: HttpClient) {}
  login(data: any): Observable<any> {
    return this.http.post(this.APIList.login, data);
  }
  addAdmin(param): Observable<any> {
    return this.http.post(this.APIList.createAdmin, param);
  }
  getAdmin(): Observable<any> {
    return this.http.get(this.APIList.admin);
  }
  deleteAdmin(id): Observable<any> {
    return this.http.delete(`${this.url}/admin/delete?userName=${id}`);
  }
  getUsers():Observable<any>{
    return this.http.get(this.APIList.users);
  }
  getUserProfile(id):Observable<any>{
    return this.http.get(`${this.url}/admin/userProfile?userId=${id}`);
  }
  sendNotification(param): Observable<any> {
    return this.http.post(this.APIList.sendNot, param);
  }
}
