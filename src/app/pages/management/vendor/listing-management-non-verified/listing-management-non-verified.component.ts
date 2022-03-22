import { Component, OnInit } from "@angular/core";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { MessageService } from "primeng/api";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-listing-management-non-verified",
  templateUrl: "./listing-management-non-verified.component.html",
  styleUrls: ["./listing-management-non-verified.component.scss"],
  providers: [DialogService, MessageService],
})
export class ListingManagementNonVerifiedComponent implements OnInit {
  nonDoctorData:any;
  err:any;
  refresh = true;
  constructor(
    private Data: DataService,
    private messageService: MessageService,
    public dialogService: DialogService
  ) {}
  ref: DynamicDialogRef;
  ngOnInit(): void {
    this.getDoctors();
  }
  getDoctors(): void {
        this.Data.getNonVerifiedDoctorData().subscribe(
      (data:any) => {
        console.log('hey', data)
        this.nonDoctorData = data?.doctorData;
        this.refresh = true;
      },
      (err) => {
        this.refresh = true;
        this.nonDoctorData = null;
        console.log('got errrr',this.nonDoctorData)

        this.messageService.add({
          severity: "error",
          summary: "Error Message",
          detail: err,
        });
      }
    );
  }
}
