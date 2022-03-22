// import {
//   Component,
//   Input,
//   OnInit,
//   AfterViewInit,
//   ViewChild,
// } from "@angular/core";
// import { DataService } from "./../../services/data.service";
// import { Router } from "@angular/router";
// import { tableHead } from "./../../module/tableHead";
// import { MessageService } from "primeng/api";
// import { PageEvent, MatPaginator } from "@angular/material/paginator";
// export type SortDirection = "asc" | "desc";
// // tslint:disable-next-line:object-literal-key-quotes
// const rotate: { [key: string]: SortDirection } = { asc: "desc", desc: "asc" };
// const compare = (v1: string | number, v2: string | number) =>
//   v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
// @Component({
//   selector: "app-table",
//   templateUrl: "./table.component.html",
//   styleUrls: ["./table.component.scss"],
//   providers: [MessageService],
// })
// export class TableComponent implements OnInit, AfterViewInit {
//   @ViewChild(MatPaginator) paginator: MatPaginator;

//   title = "Dummy Title";
//   page = 0;
//   pageSize = 5;
//   refresh = true;
//   constructor(
//     private router: Router,
//     private data: DataService,
//     private messageService: MessageService
//   ) {
//     this.baseurl = data.baseurl;
//   }
//   customers: any[];
//   collectionSize = 0;
//   tableValue: any[];
//   @Input() inputData: any;
//   @Input() flag: any;
//   pageEvent: PageEvent;
//   public tableHeads;
//   fnSelect: any;
//   baseurl: string;
//   error = "";
//   ngOnInit(): void {
//     this.collectionSize = this.inputData.length;
//     this.tableValue = this.inputData;
//     this.refreshData(this.page);
//     switch (this.flag) {
//       case "userList": {
//         this.userList();
//         this.fnSelect = "userList";
//         break;
//       }
//       case "facilitatorList": {
//         this.facilitatorList();
//         this.fnSelect = "facilitatorList";
//         break;
//       }
//       case "nonfacilitatorList": {
//         this.nonfacilitatorList();
//         this.fnSelect = "nonfacilitatorList";
//         break;
//       }
//       case "userAppointments": {
//         this.userAppointments();
//         this.fnSelect = "appointmentList";
//         break;
//       }
//       case "appointmentList": {
//         this.AppointmentList();
//         this.fnSelect = "appointmentList";
//         break;
//       }
//       case "ongoingAppointments": {
//         this.ongoingAppointmentsFn();
//         this.fnSelect = "evenappointmentList";
//         break;
//       }
//       case "nonDoctor": {
//         this.doctorNon();
//         this.fnSelect = "nonDoctor";
//         break;
//       }
//       case "doctorverified": {
//         this.doctorVerify();
//         this.fnSelect = "doctorverified";
//         break;
//       }
//       case "complaintList": {
//         this.getComplaints();
//         break;
//       }
//       case "recentUsers": {
//         this.getRecentUsers();
//         this.fnSelect = "recentUsers";

//         break;
//       }
//       case "recentFacilitators": {
//         this.getRecentFacilitators();
//         this.fnSelect = "recentFacilitators";

//         break;
//       }
//       case "quoteData": {
//         this.getQuoteData();
//         break;
//       }
//       case "facilitatorProfileDoctor": {
//         this.tableHeads = tableHead[0].facilitatorListOnFacilitatorProfile;
//         this.fnSelect = "nonDoctor";
//         break;
//       }
//       case "userReport": {
//         this.tableHeads = tableHead[0].reports.user;
//         break;
//       }
//       case "facilitatorReport": {
//         this.tableHeads = tableHead[0].reports.facilitator;
//         break;
//       }
//       case "listReport": {
//         this.tableHeads = tableHead[0].reports.list;
//         break;
//       }
//       case "appointmentReport": {
//         this.tableHeads = tableHead[0].reports.appointment;
//         break;
//       }
//       default: {
//         this.messageService.add({
//           severity: "error",
//           summary: "Error Message",
//           detail: "Something went wrong while Loading Data",
//         });
//         window.alert("Oops Something went wrong while loading Data");
//       }
//     }
//   }

//   ngAfterViewInit() {
//     this.paginator.pageIndex = this.page;
//     this.paginator.pageSize = this.pageSize;
//     console.log("AfterViewInit", this.paginator.pageIndex);
//   }
//   getRecentUsers() {
//     this.tableHeads = tableHead[0].dash.recentFacilitators;
//     this.error = "Oops Something went Wrong";
//   }
//   getQuoteData() {
//     this.tableHeads = tableHead[0].quote;
//     this.error = "Oops Something went Wrong";
//   }
//   getRecentFacilitators() {
//     this.tableHeads = tableHead[0].dash.recentFacilitators;
//     this.error = "Oops Something went Wrong";
//   }
//   getComplaints() {
//     this.tableHeads = tableHead[0].complaintBox;
//     this.error = "Oops Something went Wrong";
//   }
//   doctorNon() {
//     this.tableHeads = tableHead[0].nonfacilitatorList;
//     this.error = `No doctor Found`;
//   }
//   doctorVerify() {
//     this.tableHeads = tableHead[0].facilitatorList;
//   }
//   ongoingAppointmentsFn() {
//     this.tableHeads = tableHead[0].ongoingAppointment;
//     this.error = "No Active Appointments";
//   }
//   userAppointments() {
//     console.log(this.tableValue);
//     this.tableHeads = tableHead[0].userAppointments;
//     this.error = "No Appointments for this user";
//   }
//   facilitatorList = () => {
//     this.tableHeads = tableHead[0].facilitator;
//     this.error = "No Facilitator";
//   };
//   nonfacilitatorList = () => {
//     this.tableHeads = tableHead[0].nonfacilitator;
//     this.error = "No Facilitator";
//   };
//   AppointmentList() {
//     this.tableHeads = tableHead[0].appointmentList;
//     this.error = "No Appointment";
//   }
//   userList() {
//     this.tableHeads = tableHead[0].userList;
//     this.error = "No User";
//     this.fnSelect = "userList";
//   }
//   statusChange(id, status) {
//     this.data.updateComplaints({ id, status }).subscribe(
//       (data) => {
//         this.messageService.add({
//           severity: "success",
//           sticky: false,
//           life: 1500,
//           summary: "Info Message",
//           detail: data.message,
//         });
//       },
//       (err) => {
//         this.messageService.add({
//           severity: "error",
//           sticky: false,
//           life: 1500,
//           summary: "Error Message",
//           detail: err,
//         });
//       }
//     );
//   }
//   onClickFn(Id, nav, Status: any) {
//     switch (this.fnSelect) {
//       case "userList": {
//         if (nav === "nav") {
//           this.router.navigate(["/pages/management/user/profile" || "/"], {
//             queryParams: { profileId: Id },
//           });
//         } else {
//           const param = {
//             id: Id,
//             status: Status,
//           };
//           this.data.userStatusChange(param).subscribe(
//             (data) => {
//               this.messageService.add({
//                 severity: "success",
//                 sticky: false,
//                 life: 1500,
//                 summary: "Info Message",
//                 detail: data.message,
//               });
//             },
//             (err) =>
//               this.messageService.add({
//                 severity: "error",
//                 sticky: false,
//                 life: 1500,
//                 summary: "Error Message",
//                 detail: err,
//               })
//           );
//         }
//         break;
//       }
//       case "facilitatorList": {
//         if (nav === "nav") {
//           this.router.navigate(["/pages/management/vendor/profile/" || "/"], {
//             queryParams: { profileId: Id },
//           });
//           // localStorage.setItem('vendorprofileId', Id);
//         } else {
//           const param = {
//             id: Id,
//             status: Status,
//           };
//           this.data.facilitatorStatusChange(param).subscribe(
//             (data) => {
//               this.messageService.add({
//                 severity: "success",
//                 sticky: false,
//                 life: 1500,
//                 summary: "Info Message",
//                 detail: data.message,
//               });
//             },
//             (err) =>
//               this.messageService.add({
//                 severity: "error",
//                 sticky: false,
//                 life: 1500,
//                 summary: "Error Message",
//                 detail: err,
//               })
//           );
//         }
//         break;
//       }
//       case "nonfacilitatorList": {
//         if (nav === "nav") {
//           this.router.navigate(["/pages/management/vendor/profile" || "/"], {
//             queryParams: { profileId: Id },
//           });
//           // localStorage.setItem('vendorprofileId', Id);
//         } else {
//           const param = {
//             id: Id,
//             verify: Status,
//           };
//           this.data.verifyFacilitator(param).subscribe(
//             (data) => {
//               this.messageService.add({
//                 severity: "success",
//                 sticky: false,
//                 life: 1500,
//                 summary: "Info Message",
//                 detail: data.message,
//               });
//             },
//             (err) =>
//               this.messageService.add({
//                 severity: "error",
//                 sticky: false,
//                 life: 1500,
//                 summary: "Error Message",
//                 detail: err,
//               })
//           );
//         }
//         break;
//       }
//       case "nonDoctor": {
//         if (nav === "nav") {
//           this.router.navigate(
//             ["/pages/management/vendor/listProfile" || "/"],
//             { queryParams: { profileId: Id } }
//           );
//         } else {
//           const param = {
//             id: Id,
//             verify: Status,
//           };
//           this.data.verifyDoctor(param).subscribe(
//             (data) => {
//               this.messageService.add({
//                 severity: "success",
//                 sticky: false,
//                 life: 1500,
//                 summary: "Info Message",
//                 detail: data.message,
//               });
//             },
//             (err) =>
//               this.messageService.add({
//                 severity: "error",
//                 sticky: false,
//                 life: 1500,
//                 summary: "Error Message",
//                 detail: err,
//               })
//           );
//         }
//         break;
//       }
//       case "doctorverified": {
//         if (nav === "nav") {
//           this.router.navigate(
//             ["/pages/management/vendor/listProfile" || "/"],
//             { queryParams: { profileId: Id } }
//           );
//         } else {
//           const param = {
//             id: Id,
//             verify: Status,
//           };
//           this.data.verifyDoctor(param).subscribe(
//             (data) => {
//               this.messageService.add({
//                 severity: "success",
//                 sticky: false,
//                 life: 1500,
//                 summary: "Info Message",
//                 detail: data.message,
//               });
//             },
//             (err) =>
//               this.messageService.add({
//                 severity: "error",
//                 sticky: false,
//                 life: 1500,
//                 summary: "Error Message",
//                 detail: err,
//               })
//           );
//         }
//         break;
//       }
//       case "appointmentList": {
//         this.router.navigate(["/pages/management/event/eventProfile" || "/"], {
//           queryParams: { profileId: Id },
//         });
//         break;
//       }
//       case "recentFacilitators": {
//         this.router.navigate(["/pages/management/vendor/profile" || "/"], {
//           queryParams: { profileId: Id },
//         });
//         break;
//       }
//       case "recentUsers": {
//         this.router.navigate(["/pages/management/user/profile" || "/"], {
//           queryParams: { profileId: Id },
//         });
//         break;
//       }
//       default: {
//         this.messageService.add({
//           severity: "error",
//           sticky: false,
//           life: 1500,
//           summary: "Info Message",
//           detail: this.flag,
//         });
//       }
//     }
//   }
//   quoteNavi(val, flag) {
//     switch (flag) {
//       case "userName": {
//         if (val.userId) {
//           this.router.navigate(["/pages/management/user/profile" || "/"], {
//             queryParams: { profileId: val.userId },
//           });
//         }
//         break;
//       }
//       case "listName": {
//         if (val.listId) {
//           this.router.navigate(
//             ["/pages/management/vendor/listProfile" || "/"],
//             { queryParams: { profileId: val.listId } }
//           );
//         }
//         break;
//       }
//       case "appointmentName": {
//         if (val.appointmentId) {
//           this.router.navigate(
//             ["/pages/management/event/eventProfile" || "/"],
//             { queryParams: { profileId: val.appointmentId } }
//           );
//         }
//         break;
//       }
//       case "facilitatorName": {
//         if (val.facilitatorId) {
//           this.router.navigate(["/pages/management/vendor/profile" || "/"], {
//             queryParams: { profileId: val.facilitatorId },
//           });
//         }
//       }
//     }
//   }
//   // ng-bootstrap fns
//   refreshData(page) {
//     this.page = page;
//     console.log(this.pageSize, page);
//     console.log(this.inputData.length, page);
//     this.tableValue = this.inputData?.slice(
//       (this.page - 1) * this.pageSize,
//       (this.page - 1) * this.pageSize + this.pageSize
//     );
//     if (this.inputData.length > this.page && this.tableValue.length < 1) {
//       const Page = 1;
//       this.tableValue = this.inputData?.slice(
//         (Page - 1) * this.pageSize,
//         (Page - 1) * this.pageSize + this.pageSize
//       );
//       this.page = Page;
//       console.log(this.page)
//       console.log("get in");
//     } else {
//       console.log("hehehe", this.tableValue.length);
//     }
//   }
//   pageChange(pageEvent) {
//     console.log(pageEvent, "---");
//     this.pageSize = pageEvent.pageSize;
//     this.page = pageEvent.pageIndex + 1;
//     this.refreshData(this.page);
//   }
//   // tslint:disable-next-line:member-ordering
//   direction: SortDirection = "asc";
//   rotate(head) {
//     this.direction = rotate[this.direction];
//     this.sortFn(head, this.direction);
//   }
//   sortFn(head, direction) {
//     // console.log("head", this.inputData);
//     this.inputData = [...this.inputData].sort((a, b) => {
//       let res;
//       if (["id", "Id"].includes(head)) {
//         // tslint:disable-next-line:one-variable-per-declaration
//         const aId = a[head].substring(1),
//           bId = b[head].substring(1);
//         res = compare(parseInt(aId), parseInt(bId));
//       } else {
//         if (
//           ![null, undefined].includes(a[head]) &&
//           isNaN(a[head]) &&
//           ![null, undefined].includes(b[head])
//         ) {
//           res = compare(a[head].toLowerCase(), b[head].toLowerCase());
//         } else if (!isNaN(a[head])) {
//           res = compare(a[head], b[head]);
//         }
//       }
//       return direction === "asc" ? res : -res;
//     });
//     this.refreshData(this.page);
//     this.refresh = true;
//   }
// }
