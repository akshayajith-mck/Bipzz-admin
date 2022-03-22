import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  providers: [MessageService],
})
export class DashboardComponent implements OnInit {
  constructor(
    private data: DataService,
    private messageService: MessageService
  ) {}
  ongoingAppointments;
  tableType = "tableType";
  error = "error";
  OngoingError = "Loading";
  userData: any;
  recentFacilitators: any;
  err = {
    user: false,
    facilitator: false,
  };
  modalCall = false;
  ngOnInit() {
    this.ongoingAppointmentFn();
    // this.recentUsers();
    // this.recentFacilitator();
  }
  ongoingAppointmentFn() {
    this.data.getOnAppointment().subscribe(
      (data) => {
        console.log(data);
        this.ongoingAppointments = data;
      },
      (error) => {
        this.messageService.add({
          severity: "error",
          summary: "Error Message",
          detail: error,
        });
        this.OngoingError = error;
      }
    );
  }
  recentUsers() {
    this.data.recentUsers().subscribe(
      (data) => (this.userData = data),
      (err) => (this.err.user = true)
    );
  }
  recentFacilitator() {
    this.data.recentFacilitator().subscribe(
      (data) => (this.recentFacilitators = data,
        console.log(data)),
      (err) => (this.err.facilitator = true)
    );
  }
}
