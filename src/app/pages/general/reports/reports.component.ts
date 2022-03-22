import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { DownloadService } from "src/app/services/download.service";
@Component({
  selector: "app-reports",
  templateUrl: "./reports.component.html",
  styleUrls: ["./reports.component.scss"],
})
export class ReportsComponent implements OnInit {
  userRange: FormGroup;
  facilitatorRange: FormGroup;
  packageRange: FormGroup;
  appointmentRange: FormGroup;
  subscriptionRange: FormGroup;
  refresh = true;
  tableData = {
    userData: null,
    facilitatorData: null,
    appointmentData: null,
    packageData: null,
  };
  manual = {
    appointment: false,
    user: false,
    facilitator: false,
  };
  startDate: Date = new Date(new Date().setDate(new Date().getDate() - 30));
  endDate: Date = new Date();
  constructor(
    private fb: FormBuilder,
    private data: DataService,
    private downloadService: DownloadService
  ) {}
  ngOnInit(): void {
    this.userRange = this.fb.group({
      startDate: [this.startDate, Validators.required],
      endDate: [this.endDate, Validators.required],
    });
    this.facilitatorRange = this.fb.group({
      startDate: [this.startDate, Validators.required],
      endDate: [this.endDate, Validators.required],
    });
    this.appointmentRange = this.fb.group({
      startDate: [this.startDate, Validators.required],
      endDate: [this.endDate, Validators.required],
    });
    this.packageRange = this.fb.group({
      startDate: [this.startDate, Validators.required],
      endDate: [this.endDate, Validators.required],
    });
  }
  userFn(param) {
    this.data.reportUser(param).subscribe(
      (res) => {
        this.refresh = true;
        this.tableData.userData = "Generated";
        return this.downloadService.downloadFile(res, "user");
      },
      (err: any) => (this.tableData.userData = err)
    );
  }
  facilitatorFn(param) {
    this.data.reportFacilitator(param).subscribe(
      (res) => {
        this.refresh = true;
        this.tableData.facilitatorData = "Generated";
        return this.downloadService.downloadFile(res, "facilitator");
      },
      (err) => (this.tableData.facilitatorData = err)
    );
  }

  appointmentFn(param) {
    this.data.reportAppointment(param).subscribe(
      (res) => {
        this.tableData.appointmentData = "Generated";
        return this.downloadService.downloadFile(res, "appointment");
      },
      (err) => {
        this.tableData.appointmentData = err;
      }
    );
  }
  packageFn(param) {
    this.data.reportPackage(param).subscribe(
      (res) => {
        this.tableData.packageData = "Generated";
        return this.downloadService.downloadFile(res, "package");
      },
      (err) => {
        this.tableData.packageData = err;
      }
    );
  }
  downloadFile(data, name) {
    return this.downloadService.downloadFile(data, name);
  }
}
