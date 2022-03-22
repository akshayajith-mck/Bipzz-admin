import { DataService } from "src/app/services/data.service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit, Input, ViewChild } from "@angular/core";
import "rxjs/add/operator/filter";
import { MessageService } from "primeng/api";
import { DialogService } from "primeng/dynamicdialog";
import { DynamicDialogRef } from "primeng/dynamicdialog";
import { ModalComponent } from "src/app/components/modal/modal.component";
import { status } from "src/app/services/dummyData";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
  providers: [DialogService, MessageService],
})
export class ProfileComponent implements OnInit {
  err: any;
  userId: any;
  profileData: any;
  profileId: any;
  inputData: any;
  inputErr: any;
  quoteData: any;
  baseurl: any;
  refresh = true;
  public files;
  @ViewChild("fileInput")
  fileInput;
  file: File | null = null;

  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    // tslint:disable-next-line:align
    private messageService: MessageService,
    public dialogService: DialogService
  ) {}
  ref: DynamicDialogRef;
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.profileId = params.profileId;
      console.log({ params });
    });
    this.userProfile(this.profileId);
    this.appointmentDetails(this.profileId);
    this.baseurl = this.data.baseurl;
  }
  userProfile(id): void {
    console.log(id);
    this.data.getUser(id).subscribe(
      (data: any) => ((this.profileData = data), (this.refresh = true)),
      (err) => (this.err = err)
    );
  }
  appointmentDetails(id) {
    this.data.getUserAppointment(id).subscribe(
      (data) => {
        this.inputData = data.length > 0 ? data : null;
      },
      (err) => {
        this.inputErr = err;
      }
    );
  }
  statusChange(statusch = null) {
    const param = {
      userId: this.profileId,
      status: statusch == status.ACTIVE ? status.SUSPEND : status.ACTIVE,
    };
    console.log("id", param);

    this.data.userStatusChange(param).subscribe(
      (data) => {
        this.messageService.add({
          severity: "success",
          sticky: false,
          life: 1500,
          summary: "Info Message",
          detail: data.message,
        });
        this.profileData.status = param.status;
      },
      (err) =>
        this.messageService.add({
          severity: "error",
          sticky: false,
          life: 1500,
          summary: "Error Message",
          detail: err,
        })
    );
  }
  show() {
    // console.clear();
    console.table(this.profileData);
    this.ref = this.dialogService.open(ModalComponent, {
      header: "User Updation",
      width: "50vw",
      data: {
        flag: "userUpdation",
        inputData: { ...this.profileData, id: this.profileId },
      },
      contentStyle: { "max-height": "350px", overflow: "auto" },
      baseZIndex: 10000,
    });
    this.ref.onClose.subscribe((data) => {
      this.userProfile(this.profileId);
    });
  }

  onFileChangeInput(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
    const param: FormData = new FormData();
    param.append("picture", this.file);
    param.append("userId", this.profileId);
    console.log(this.data);

    this.data.userProfileImg(param).subscribe(
      (succ) => {
        this.messageService.add({
          severity: "success",
          sticky: false,
          life: 1500,
          summary: "Info Message",
          detail: succ.message,
        });
        this.userProfile(this.profileId);
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
