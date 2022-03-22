import { ModalComponent } from "./../../../../components/modal/modal.component";
import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "src/app/services/data.service";
import { MessageService, ConfirmationService } from "primeng/api";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";

@Component({
  selector: "app-event-profile",
  templateUrl: "./event-profile.component.html",
  styleUrls: ["./event-profile.component.scss"],
  providers: [ConfirmationService, DialogService, MessageService],
})
export class EventProfileComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    // tslint:disable-next-line:align
    private messageService: MessageService,
    // tslint:disable-next-line:align
    private confirmationService: ConfirmationService,
    // tslint:disable-next-line:align
    public dialogService: DialogService
  ) {}
  ref: DynamicDialogRef;
  public files;
  @ViewChild("fileInput")
  fileInput;
  file: File | null = null;

  profileId: any;
  err = {
    appointmentAdmins: false,
    profileData: false,
    facilitatorData: false,
    programData: false,
  };
  baseUrl: any;
  profileData: any;
  facilitatorData: any;
  adminsData: any;
  programData: any;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.profileId = params.profileId;
      console.log({ params });
    });
    this.appointmentProfile(this.profileId);
  }
  appointmentProfile(id) {
    this.data.getAppointmentData(id).subscribe(
      (data) => {
        this.profileData = data;
      },
      (err) => (this.err.profileData = err)
    );
  }
  // getAppointmentAdmins(id) {
  //   this.data.getAppointmentAdmins(id).subscribe(
  //     (data) => (this.adminsData = data),
  //     (err) => (this.err.appointmentAdmins = true)
  //   );
  // }
  // getFacilitatorList(id) {
  //   this.data.getAppointmentFacilitator(id).subscribe(
  //     (data) => {
  //       this.facilitatorData = data;
  //     },
  //     (err) => (this.err.facilitatorData = true)
  //   );
  // }

  liveUpdate(id) {
    this.ref = this.dialogService.open(ModalComponent, {
      header: ` Appointments Live Updates`,
      width: "90vw",
      data: {
        flag: "liveUpdate",
        inputData: { id, appointmentId: this.profileId },
      },
      contentStyle: { overflow: "auto" },
      baseZIndex: 10000,
    });
  }

  onFileChangeInput(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
    const param: FormData = new FormData();
    param.append("picture", this.file);
    param.append("appointmentId", this.profileId);
    this.data.appointmentProfileImg(param).subscribe(
      (succ) => {
        this.messageService.add({
          severity: "success",
          sticky: false,
          life: 1500,
          summary: "Info Message",
          detail: succ.message,
        });
        this.appointmentProfile(this.profileId);
      },
      (err) => {
        this.messageService.add({
          severity: "error",
          sticky: false,
          life: 1500,
          summary: "Info Message",
          detail: err,
        });
      }
    );
  }
  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }
}
