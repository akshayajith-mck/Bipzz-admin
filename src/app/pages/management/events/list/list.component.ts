import { appointmentTable } from "./../../user/tableModel";
import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
  providers: [MessageService],
})
export class ListComponent implements OnInit {
  appointmentList: appointmentTable[];
  refresh = true;
  constructor(
    private Data: DataService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.getAppointmentDetails();
  }
  getAppointmentDetails(): void {
    this.Data.getAppointmentDetails().subscribe(
      (data:any) => {
        this.appointmentList = data?.appointmentData;
        
        this.refresh = true;
      },
      (err) => {
        this.appointmentList = null;
        this.messageService.add({
          severity: "error",
          summary: "Error Message",
          detail: err,
        });
      }
    );
  }
}
