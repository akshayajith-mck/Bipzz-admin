import { environment } from "./../../environments/environment";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class DataService {
  baseurl = environment.apiBaseUrl;
  // url = this.baseurl + "api";
  APIList = {
    login: this.baseurl + "/admin/login",
    createAdmin: this.baseurl + "/admin/createAdmin",
    admin: this.baseurl + "/admin/all",
    adminDelete: this.baseurl + `/admin/deleteAdmin`,
    count: this.baseurl + "/admin/getCount",
    users: this.baseurl+ "/admin/allUsers",
    sendNoti:this.baseurl +"/v1/createNotification"
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
    return this.http.delete(`${this.baseurl}/admin/delete?userName=${id}`);
  }
  getUsers():Observable<any>{
    return this.http.get(this.APIList.users);
  }
  getUserProfile(id):Observable<any>{
    return this.http.get(`${this.baseurl}/admin/userProfile?userId=${id}`);
  }
  sendNotification(param): Observable<any> {
    return this.http.post(this.APIList.sendNoti, param);
  }
}
