import { ModalComponent } from "./../../components/modal/modal.component";
import { DataService } from "src/app/services/data.service";
import { Component, OnInit } from "@angular/core";
import { MessageService, ConfirmationService } from "primeng/api";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.scss"],
  providers: [ConfirmationService, DialogService, MessageService],
})
export class FaqComponent implements OnInit {
  faqData = [];
  create = false;
  errFlag = false;
  constructor(
    private data: DataService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    public dialogService: DialogService
  ) {}
  ref: DynamicDialogRef;
  ngOnInit(): void {
    this.getFaq();
  }
  getFaq() {
    this.data.faqGet().subscribe(
      (data) => (this.faqData = data),
      (err) => (this.errFlag = true)
    );
  }
  show(data) {
    this.ref = this.dialogService.open(ModalComponent, {
      header: "FAQ Updation",
      width: "50vw",
      data: {
        flag: "faq",
        inputData: data,
      },
      contentStyle: { "max-height": "350px", overflow: "auto" },
      baseZIndex: 10000,
    });
    this.getFaq();
  }
  delete(faqId) {
    this.confirmationService.confirm({
      message: `Do you want to delete`,
      header: `Delete Confirmation`,
      icon: "pi pi-info-circle",
      accept: () => {
        this.data.faqDelete(faqId).subscribe(
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
        this.getFaq();
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
