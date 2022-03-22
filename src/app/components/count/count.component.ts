import { DataService } from "./../../services/data.service";
import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-count",
  templateUrl: "./count.component.html",
  styleUrls: ["./count.component.scss"],
  providers: [MessageService],
})
export class CountComponent implements OnInit {
  constructor(
    private data: DataService,
    private messageService: MessageService
  ) {}
  listCount = 0;
  newListCount = 0;
  newFacilitatorCount = 0;
  newUserCount = 0;
  appointmentCount = 0;
  facilitatorCount = 0;
  userCount = 0;
  newAppointmentCount = 0;
  ngOnInit(): void {
    this.data.getCount().subscribe(
      (data) => {
        this.facilitatorCount =
          data && data.facilitatorCount ? data.facilitatorCount : 0;
        this.userCount = data && data.userCount ? data.userCount : 0;
        this.appointmentCount =
          data && data.appointmentCount ? data.appointmentCount : 0;
        this.listCount = data && data.listCount ? data.listCount : 0;
        this.newUserCount = data && data.newUserCount ? data.newUserCount : 0;
        this.newAppointmentCount =
          data && data.newAppointmentCount ? data.newAppointmentCount : 0;
        this.newListCount = data && data.newListCount ? data.newListCount : 0;
        this.newFacilitatorCount =
          data && data.newFacilitatorCount ? data.newFacilitatorCount : 0;
      },
      (error) => {
        console.log(error)
        this.messageService.add({
          severity: "error",
          summary: "Error Message",
          detail: error,
        });
      }
    );
  }
}
