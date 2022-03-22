import { environment } from "./../../environments/environment";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class DataService {
  baseurl = environment.apiBaseUrl;
  url = this.baseurl + "/v1/admin";
  APIList = {
    login: this.url + "/login",
    search: this.url + "/dashSearch",
    count: this.url + "/getCount",
    dash: this.url + "/dash",
    userStatus: this.url + "/userStatusUpdate",
    facilitatorStatus: this.url + "/facStatusUpdate",
    userAppointment: this.url + "/appointments",
    userCreation: this.url + "/userRegister",
    updateUser: this.url + "/updateUser",
    sliderPost: this.url + "/bannerCreation",
    updatesliderPost: this.url + "/update",
    facilitatorVerify: this.url + "/verifyFac",
    listVerify: this.url + "/verify",
    deleteList: this.url + "/deleteDoc",
    updateFacilitator: this.url + "/updateFaq",
    createFacilitator: this.url + "/FacRegister",
    faqOperation: this.url + "/updateFaq",
    promoOperation: this.url + "/general/promotions",
    subscription: this.url + "/getSubscription_All",
    getReview: this.url + "/doctor_getReview_Single",
    listStatus: this.url + "/status",
    appointmentBoost: this.url + "/boosted",
    getAlbum: this.url + "/getAlbum",
    getAlbumById: this.url + "/getAlbumById",
    getAppointment_All: this.url + `/getAppointments_all`,
    getAppointmentAdmin: this.url + "/getAdmins",
    getAppointmentFacilitator: this.url + "/getfacilitatorList",
    getProgramList: this.url + "/getProgramList",
    getLiveUpdate: this.url + "/getLiveUpdate",
    complaint: this.url + "/complaints",
    quote: this.url + "/quote",
    admin: this.url + "/getDetails",
    adminCreation: this.url + "/register",
    adminDelete: this.url + `/deleteAdmin`,
    userReport: this.url + `/userReport`,
    facilitatorReport: this.url + `/faqReport`,
    appointmentReport: this.url + `/appointmentReport`,
    packageReport: this.url + `/packageReport`,
    userImageUpdate: this.url + "/uploadUser",
    facilitatorImageUpdate: this.url + "/uploadFacilitator",
    listImageUpdate: this.url + "/uploadList",
    appointmentImageUpdate: this.url + "/uploadAppointment",
    facilitatorDocUpdate: this.url + "/uploadFacilitatorDoc",
    facilitatorIdUpdate: this.url + "/uploadFacilitatorId",
    listDocChange: this.url + "/uploadlistDoc",
    sendFlashImg: this.url + "/sendFlashImg",
    sendFlash: this.url + "/sendFlash",
    subscriptionCreate: this.url + "/subsriptionCreation",
    subscriptionUpdate: this.url + "/updateSubscription",
    blogCreation: this.url + "/createBlog",
  };
  constructor(private http: HttpClient) {}
  loginSubmit(data: any): Observable<any> {
    return this.http.post(this.APIList.login, data);
  }
  addAdmin(param): Observable<any> {
    return this.http.post(this.APIList.adminCreation, param);
  }
  getAdmin(): Observable<any> {
    return this.http.get(this.APIList.admin);
  }
  deleteAdmin(id): Observable<any> {
    return this.http.get(this.APIList.adminDelete + `/${id}`);
  }
  /// header search
  keySearch(data: any): Observable<any> {
    return this.http.post(this.APIList.search, data);
  }
  /// header search

  getCount(): Observable<any> {
    return this.http.get(this.APIList.count);
  }
  getReviews(id): Observable<any> {
    return this.http.post(this.APIList.getReview, id);
  }
  // dashboard
  getOnAppointment(): Observable<any> {
    return this.http.get(this.url + "/onGoingAppointments");
  }
  // Banner

  getBanner(): Observable<any> {
    return this.http.get(this.APIList + "/getBanners");
  }
  createBanner(params): Observable<any> {
    return this.http.post(this.APIList.sliderPost, params);
  }

  recentUsers(): Observable<any> {
    return this.http.get(this.url + "/getRecent_User");
  }
  recentFacilitator(): Observable<any> {
    return this.http.get(this.url + "/getRecent_Fac");
  }
  //
  getUserData(): Observable<any> {
    return this.http.get(this.url + "/getAll_User");
  }
  getUser(id: string): Observable<any> {
    return this.http.get(`${this.url}/getUser/?userId=${id}`);
  }
  getFacilitator(id: string): Observable<any> {
    return this.http.get(`${this.url}/getFac?facilitatorId=${id}`);
  }
  getListbyFacilitator(id): Observable<any> {
    return this.http.get(`${this.url}/getDoctorFac?facilitatorId=${id}`);
  }
  getdoctor(id: string): Observable<any> {
    return this.http.get(`${this.url}/getDoctor?doctorId=${id}`);
  }
  userStatusChange(param: any): Observable<any> {
    return this.http.post(this.APIList.userStatus, param);
  }
  facilitatorStatusChange(param: any): Observable<any> {
    return this.http.post(this.APIList.facilitatorStatus, param);
  }
  getUserAppointment(id: string): Observable<any> {
    return this.http.get(`${this.url}/getUser_Appointment?userId=${id}`);
  }
  createUser(param): Observable<any> {
    return this.http.post(this.APIList.userCreation, param);
  }
  createFacilitator(param): Observable<any> {
    return this.http.post(this.APIList.createFacilitator, param);
  }
  updateUser(param: string): Observable<any> {
    return this.http.put(this.APIList.updateUser, param);
  }
  updateFacilitator(param: string): Observable<any> {
    return this.http.put(this.APIList.updateFacilitator, param);
  }
  getVerifiedFacilitatorData(): Observable<any> {
    return this.http.get(this.url + "/getVerifiedFac");
  }
  getNonverifiedFacilitatorData(): Observable<any> {
    return this.http.get(this.url + "/getNonVerifiedFac");
  }
  verifyFacilitator(param: any): Observable<any> {
    return this.http.post(this.APIList.facilitatorVerify, param);
  }
  //// doctor apis
  getVerifiedDoctorData(): Observable<any> {
    return this.http.get(`${this.url}/getDoc_verify?verified=true`);
  }
  getNonVerifiedDoctorData(): Observable<any> {
    return this.http.get(`${this.url}/getDoc_verify?verified=false`);
  }
  verifyDoctor(param): Observable<any> {
    return this.http.post(this.APIList.listVerify, param);
  }
  doctorStatus(param): Observable<any> {
    return this.http.post(this.APIList.listStatus, param);
  }
  getPortfolio(id): Observable<any> {
    return this.http.get(this.APIList.getAlbum + `/${id}`);
  }
  getAlbumDataById(data): Observable<any> {
    return this.http.post(this.APIList.getAlbumById, data);
  }
  deleteDoctor(id): Observable<any> {
    return this.http.get(`${this.APIList.deleteList}/ ${id}`);
  }
  // doctor apis

  uploadSlider(params): Observable<any> {
    return this.http.post(this.APIList.sliderPost, params);
  }
  updateSlider(params): Observable<any> {
    return this.http.post(this.APIList.updatesliderPost, params);
  }
  deleteSlider(id): Observable<any> {
    return this.http.delete(this.url + "/" + id);
  }
  checkImage(img): Observable<any> {
    return this.http.get(`${this.baseurl}${img}`);
  }
  faqGet(): Observable<any> {
    return this.http.get(this.APIList.faqOperation);
  }
  faqCreate(param): Observable<any> {
    return this.http.post(this.url + "/faqCreation", param);
  }
  faqUpdate(param): Observable<any> {
    return this.http.put(this.APIList.faqOperation, param);
  }
  faqDelete(faqId): Observable<any> {
    return this.http.get(`${this.APIList.faqOperation}/deleteFaq ${faqId}`);
  }
  promoGet(): Observable<any> {
    return this.http.get(this.APIList.promoOperation);
  }
  promoCreate(param): Observable<any> {
    return this.http.post(this.APIList.promoOperation, param);
  }
  promoUpdate(param): Observable<any> {
    return this.http.put(this.APIList.promoOperation, param);
  }
  promoDelete(promoId): Observable<any> {
    return this.http.get(`${this.APIList.promoOperation}/${promoId}`);
  }
  subscriptionGet(): Observable<any> {
    return this.http.get(this.APIList.subscription);
  }
  subscriptionCreate(param): Observable<any> {
    return this.http.post(this.APIList.subscriptionCreate, param);
  }
  subscriptionUpdate(param): Observable<any> {
    return this.http.put(this.APIList.subscriptionUpdate, param);
  }
  subscriptionDelete(subscriptionId): Observable<any> {
    return this.http.get(this.url + "/deleteSubscription", subscriptionId);
  }
  // event apis start
  getAppointmentDetails(): Observable<any> {
    return this.http.get(this.APIList.getAppointment_All);
  }
  getAppointmentData(id: string): Observable<any> {
    return this.http.get(
      `${this.url}/getAppointments_Single?appointmentId=${id}`
    );
  }
  boostAppointment(param): Observable<any> {
    return this.http.post(this.APIList.appointmentBoost, param);
  }
  getAppointmentAdmins(id): Observable<any> {
    return this.http.get(this.APIList.getAppointmentAdmin + `/${id}`);
  }
  getAppointmentFacilitator(id): Observable<any> {
    return this.http.get(this.APIList.getAppointmentFacilitator + `/${id}`);
  }
  getProgramList(id): Observable<any> {
    return this.http.get(this.APIList.getProgramList + `/${id}`);
  }
  getLiveUpdate(param): Observable<any> {
    return this.http.post(this.APIList.getLiveUpdate, param);
  }
  // event apis end
  // complaint issues
  getComplaints(): Observable<any> {
    return this.http.get(this.APIList.complaint);
  }
  updateComplaints(params): Observable<any> {
    return this.http.post(this.APIList.complaint, params);
  }
  // complaint end
  // quote management
  getQuotes(): Observable<any> {
    return this.http.get(this.APIList.quote);
  }
  // report generation
  reportUser(param): Observable<any> {
    return this.http.get(this.APIList.userReport, param);
  }
  reportFacilitator(param): Observable<any> {
    return this.http.get(this.APIList.facilitatorReport, param);
  }
  reportAppointment(param): Observable<any> {
    return this.http.get(this.APIList.appointmentReport, param);
  }
  reportPackage(param): Observable<any> {
    return this.http.get(this.APIList.packageReport, param);
  }
  // image Upload
  userProfileImg(param): Observable<any> {
    return this.http.post(this.APIList.userImageUpdate, param);
  }
  facilitatorProfileImg(param): Observable<any> {
    return this.http.post(this.APIList.facilitatorImageUpdate, param);
  }
  listProfileImg(param): Observable<any> {
    return this.http.post(this.APIList.listImageUpdate, param);
  }
  appointmentProfileImg(param): Observable<any> {
    return this.http.post(this.APIList.appointmentImageUpdate, param);
  }
  facilitatorDocUpdate(param): Observable<any> {
    return this.http.post(this.APIList.facilitatorDocUpdate, param);
  }
  facilitatorIdUpdate(param): Observable<any> {
    return this.http.post(this.APIList.facilitatorIdUpdate, param);
  }
  listDocChange(param): Observable<any> {
    return this.http.post(this.APIList.listDocChange, param);
  }
  sendFlash(param): Observable<any> {
    return this.http.post(this.APIList.sendFlash, param);
  }
  sendFlashImg(param): Observable<any> {
    return this.http.post(this.APIList.sendFlashImg, param);
  }
  getAllBlog(): Observable<any> {
    return this.http.get(this.url + "/blogAll");
  }
  createBlog(param): Observable<any> {
    return this.http.post(this.APIList.blogCreation, param);
  }
}
