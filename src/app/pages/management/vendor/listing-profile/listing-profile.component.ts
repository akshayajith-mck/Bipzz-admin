import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "src/app/services/data.service";
import { MessageService, ConfirmationService } from "primeng/api";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { ModalComponent } from "src/app/components/modal/modal.component";

@Component({
  selector: "app-listing-profile",
  templateUrl: "./listing-profile.component.html",
  styleUrls: ["./listing-profile.component.scss"],
  providers: [ConfirmationService, DialogService, MessageService],
})
export class ListingProfileComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    // tslint:disable-next-line:align
    private messageService: MessageService,
    // tslint:disable-next-line:align
    private confirmationService: ConfirmationService,
    // tslint:disable-next-line:align
    private router: Router,
    // tslint:disable-next-line:align
    public dialogService: DialogService
  ) {}
  // err: any;
  err = {
    listErr: null,
    album: false,
    review: false,
  };
  profileData: any;
  imgPortfolio: any;
  vdoPortfolio: any;
  otherPortfolio: any;
  reviewData: any;
  inputData: any;
  inputErr: any;
  baseUrl: any;
  ImgPath: any;
  portfolioData: any;
  profileId: any = "hahh";
  ref: DynamicDialogRef;

  public files;
  @ViewChild("fileInput")
  fileInput;
  @ViewChild("docInput")
  docInput;
  file: File | null = null;
  ////// preview image
  showFlag = false;
  selectedImageIndex = -1;
  imageObject: Array<object> = [];
  /////////// preview image
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.profileId = params.profileId;
    });
    this.listProfile(this.profileId);
    this.getReviews(this.profileId);
    this.getPortfolio(this.profileId);
    this.baseUrl = this.data.baseurl;
  }
  listProfile(id) {
    console.log('data',this.profileData)
    this.data.getdoctor(id).subscribe(
      (data) => {
        this.profileData = data;
      },
      (err) => (this.err.listErr = err)
    );
  }
  getReviews(id) {
    this.data.getReviews({ listId: id }).subscribe(
      (data) => {
        this.reviewData = data;
      },
      (err) => {
        this.err.review = true;
        this.reviewData = err;
      }
    );
  }
  deleteList(): void {
    this.confirmationService.confirm({
      message: `Do you want to delete this facilitatorListing`,
      header: `Delete Confirmation`,
      icon: "pi pi-info-circle",
      accept: () => {
        this.data.deleteDoctor(this.profileId).subscribe(
          (data) => {
            this.messageService.add({
              severity: "success",
              sticky: false,
              life: 1500,
              summary: "Success Message",
              detail: `You have deleted the Doctor`,
            });
            this.router.navigate([
              "pages/management/vendor/verifiedlisiting" || "/",
            ]);
          },
          (err) =>
            this.messageService.add({
              severity: "error",
              sticky: false,
              life: 1500,
              summary: "Rejected Message",
              detail: `${err.message}`,
            })
        );
      },
      reject: () => {
        this.messageService.add({
          severity: "error",
          sticky: false,
          life: 1500,
          summary: "Rejected Message",
          detail: `You have rejected the action`,
        });
      },
      key: `positionDialog`,
    });
  }

  statusChange(status, flag) {
    this.confirmationService.confirm({
      message: `Do you want to change the ${
        flag === "verification" ? "verification" : "status"
      } of this facilitator`,
      header: `${flag}Confirmation`,
      icon: "pi pi-info-circle",
      accept: () => {
        if (flag === "verification") {
          status = !status;
        } else {
          if (status === "active") {
            status = "inactive";
          } else if (status === "inactive") {
            status = "active";
          }
        }
        flag === "verification"
          ? this.data
              .verifyDoctor({ verify: status, id: this.profileId })
              .subscribe(
                (data) => {
                  this.profileData.isVerified = status;
                  this.messageService.add({
                    severity: "success",
                    sticky: false,
                    life: 1500,
                    summary: "Successful Message",
                    detail: `${data.message}`,
                  });
                },
                (err) => {
                  this.messageService.add({
                    severity: "error",
                    sticky: false,
                    life: 1500,
                    summary: "Unsuccessful Message",
                    detail: `${err}`,
                  });
                }
              )
          : this.data.doctorStatus({ status, id: this.profileId }).subscribe(
              (data) => {
                this.profileData.status = status;
                this.messageService.add({
                  severity: "success",
                  sticky: false,
                  life: 1500,
                  summary: "Successful Message",
                  detail: `${data.message}`,
                });
              },
              (err) =>
                this.messageService.add({
                  severity: "error",
                  sticky: false,
                  life: 1500,
                  summary: "Unsuccessful Message",
                  detail: `${err}`,
                })
            );
      },
      reject: () => {
        this.messageService.add({
          severity: "error",
          sticky: false,
          life: 1500,
          summary: "Rejected Message",
          detail: `You have rejected the action`,
        });
      },
      key: `positionDialog`,
    });
  }
  getPortfolio(id) {
    this.data.getPortfolio(id).subscribe(
      (data) => {
        this.vdoPortfolio =
          data.video && data.video.length > 0 ? data.video : null;
        this.imgPortfolio =
          data.image && data.image.length > 0 ? data.image : null;
        this.otherPortfolio =
          data.other && data.other.length > 0 ? data.other : null;
      },
      (err) => {
        this.err.album = true;
        this.vdoPortfolio = err;
        this.imgPortfolio = err;
        this.otherPortfolio = err;
      }
    );
  }
  albumList(id, nflag) {
    this.ref = this.dialogService.open(ModalComponent, {
      header: "AlbumList",
      width: "80vw",
      data: {
        flag: "album",
        inputData: { id, nflag },
      },
      contentStyle: { "max-height": "100vh", overflow: "auto" },
      baseZIndex: 10000,
    });
  }

  onFileChangeInput(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
    const param: FormData = new FormData();
    param.append("picture", this.file);
    param.append("listId", this.profileId);
    this.data.listProfileImg(param).subscribe(
      (succ) => {
        this.messageService.add({
          severity: "success",
          sticky: false,
          life: 1500,
          summary: "Info Message",
          detail: succ.message,
        });
        this.listProfile(this.profileId);
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

  onDocChange(): void {
    const files: { [key: string]: File } = this.docInput.nativeElement.files;
    this.file = files[0];
    const param: FormData = new FormData();
    param.append("document", this.file);
    param.append("listId", this.profileId);
    this.data.listDocChange(param).subscribe(
      (succ) => {
        this.messageService.add({
          severity: "success",
          sticky: false,
          life: 1500,
          summary: "Info Message",
          detail: succ.message,
        });
        this.listProfile(this.profileId);
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
  onClickDocInputButton(): void {
    this.docInput.nativeElement.click();
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
