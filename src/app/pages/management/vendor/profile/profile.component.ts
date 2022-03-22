import { ModalComponent } from "./../../../../components/modal/modal.component";
import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "src/app/services/data.service";
import { MessageService, ConfirmationService } from "primeng/api";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { status, verify } from "src/app/services/dummyData";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
  providers: [ConfirmationService, DialogService, MessageService],
})
export class ProfileComponent implements OnInit {
  err: any;
  facilitatorId: any;
  profileData: any;
  inputData: any;
  inputErr: any;
  baseUrl: any;
  ImgPath = "public/404/dummy.png";
  profileId: any;
  facilitatorOnly = true;
  refresh = true;

  public files;
  @ViewChild("fileInput")
  fileInput;
  @ViewChild("DocInput")
  DocInput;
  @ViewChild("licenceInput")
  licenceInput;
  file: File | null = null;

  ////// preview image
  showFlag = false;
  selectedImageIndex = -1;

  imageObject: Array<object> = [];

  /////////// preview image

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
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.profileId = params.profileId;
      console.log({ params });
    });
    this.userProfile(this.profileId);
    this.listDetails(this.profileId);
    this.baseUrl = this.data.baseurl;
  }
  userProfile(id) {
    this.data.getFacilitator(id).subscribe(
      (data) => {
        this.profileData = data;
        this.refresh = true;
        console.log(id)
      },
      (err) => (this.err = err)
    );
  }

  listDetails(id) {
    this.data.getListbyFacilitator(id).subscribe(
      (data) => {
        console.log(data.doctorData);
        this.inputData = data?.doctorData;
      },
      (err) => {
        console.log("no data found");
      }
    );
  }

  statusChange(statusCh = null) {
    const param = {
      facilitatorId: this.profileId,
      status: statusCh == status.ACTIVE ? status.SUSPEND : status.ACTIVE,
    };
    console.log("id", param);

    this.data.facilitatorStatusChange(param).subscribe(
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
  verification() {
    const param = {
      facilitatorId: this.profileId,
      verify: `${!this.profileData.isVerified}`,
      // verify:veri=`${!this.profileData.isVerified}`
    };
    console.log("FACid", param);
    this.data.verifyFacilitator(param).subscribe(
      (data) => {
        this.profileData.isVerified = param.verify;
        this.messageService.add({
          severity: "success",
          sticky: false,
          life: 1500,
          summary: "Info Message",
          detail: data.message,
        });
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
    this.ref = this.dialogService.open(ModalComponent, {
      header: "Facilitator Updation",
      width: "50vw",
      data: {
        flag: "facilitatorUpdation",
        inputData: { ...this.profileData, id: this.profileId },
      },
      contentStyle: { "max-height": "350px", overflow: "auto" },
      baseZIndex: 10000,
    });
    this.userProfile(this.profileId);
  }
  onFileChangeInput(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
    const param: FormData = new FormData();
    param.append("picture", this.file);
    param.append("facilitatorId", this.profileId);
    this.data.facilitatorProfileImg(param).subscribe(
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
  onClickLicenceInputButton(): void {
    this.licenceInput.nativeElement.click();
  }
  onClickDocInputButton(): void {
    this.DocInput.nativeElement.click();
  }

  onDocChange(): void {
    const files: { [key: string]: File } = this.DocInput.nativeElement.files;
    this.file = files[0];
    const param: FormData = new FormData();
    param.append("document", this.file);
    param.append("facId", this.profileId);
    this.data.facilitatorDocUpdate(param).subscribe(
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
  onLicenceChange(): void {
    const files: { [key: string]: File } =
      this.licenceInput.nativeElement.files;
    this.file = files[0];
    const param: FormData = new FormData();
    param.append("document", this.file);
    param.append("facilitatorId", this.profileId);
    this.data.facilitatorIdUpdate(param).subscribe(
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
  showLightbox(index, imgPath) {
    this.selectedImageIndex = index;
    this.showFlag = true;
    this.imageObject.push({
      image: this.baseUrl + imgPath,
      thumbImage: this.baseUrl + imgPath,
      alt: "Document",
      title: "Document",
    });
  }

  closeEventHandler() {
    this.showFlag = false;
    this.selectedImageIndex = -1;
  }
}
