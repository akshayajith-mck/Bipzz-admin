import { ModalComponent } from "./../../components/modal/modal.component";
import { Component, OnInit } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-promotions",
  templateUrl: "./promotions.component.html",
  styleUrls: ["./promotions.component.scss"],
  providers: [ConfirmationService, DialogService, MessageService],
})
export class PromotionsComponent implements OnInit {
  errFlag = false;
  create = false;
  refresh = true;

  promoData = [];
  constructor(
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
    this.getPromotion();
  }
  getPromotion() {
    this.data.promoGet().subscribe(
      (data) => {
        this.promoData = data;
        this.errFlag = false;
      },
      (err) => (this.errFlag = true)
    );
    this.refresh = true;
  }
  show(data) {
    if (data) {
      this.ref = this.dialogService.open(ModalComponent, {
        header: "Promotion Updation",
        width: "50vw",
        data: {
          flag: "promotions",
          inputData: data,
        },
        contentStyle: { "max-height": "350px", overflow: "auto" },
        baseZIndex: 10000,
      });
    } else {
      this.ref = this.dialogService.open(ModalComponent, {
        header: "Promotion Creation",
        width: "50vw",
        data: {
          flag: "promotions",
          inputData: null,
        },
        contentStyle: { "max-height": "350px", overflow: "auto" },
        baseZIndex: 10000,
      });
    }
    this.getPromotion();
  }
  delete(promoId) {
    this.confirmationService.confirm({
      message: `Do you want to delete`,
      header: `Delete Confirmation`,
      icon: "pi pi-info-circle",
      accept: () => {
        this.data.promoDelete(promoId).subscribe(
          (data) =>
            this.messageService.add({
              severity: "success",
              sticky: false,
              life: 1500,
              summary: "Successful Message",
              detail: `${data.message}`,
            }),
          (err) =>
            this.messageService.add({
              severity: "error",
              sticky: false,
              life: 1500,
              summary: "Unsuccessfull Message",
              detail: `${err.message}`,
            })
        );
        this.getPromotion();
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
  errorAlert() {
    this.messageService.add({
      severity: "error",
      sticky: false,
      life: 1500,
      summary: "Rejected Message",
      detail: `No id Found`,
    });
  }
}
