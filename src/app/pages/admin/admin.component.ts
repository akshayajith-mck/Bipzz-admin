import { ModalComponent } from "./../../components/modal/modal.component";
import { DataService } from "src/app/services/data.service";
import { Component, OnInit } from "@angular/core";

import { MessageService, ConfirmationService } from "primeng/api";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
  providers: [ConfirmationService, DialogService, MessageService],
})
export class AdminComponent implements OnInit {
  adminData: any;
  errFlag = false;
  ref: DynamicDialogRef;
  refresh = true;
  constructor(
    private data: DataService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    // tslint:disable-next-line:align
    public dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.getAdmins();
  }
  getAdmins() {
    this.data.getAdmin().subscribe(
      (data) => {
        this.adminData = data;
        this.refresh = true;
      },
      (err) => {
        this.errFlag = err;
        this.refresh = true;
      }
    );
  }
  show() {
    this.ref = this.dialogService.open(ModalComponent, {
      header: "Facilitator Creation",
      width: "50vw",
      data: {
        flag: "adminCreation",
      },
      contentStyle: { "max-height": "750px", overflow: "auto" },
      baseZIndex: 10000,
    });
  }

  delete(userName) {
    this.confirmationService.confirm({
      message: `Are you sure you want to do this?`,
      header: `Deletion Confirmation`,
      icon: "pi pi-info-circle",
      accept: () => {
        this.data.deleteAdmin(userName).subscribe(
          (data) => {
            console.log(userName)
            this.messageService.add({
              severity: "success",
              sticky: false,
              life: 1500,
              summary: "Info Message",
              detail: data.message,
            });
            this.refresh = true;
            this.getAdmins();
          },
          (err) => {
            this.messageService.add({
              severity: "error",
              summary: "Error Message",
              detail: err,
            });
            this.refresh = true;
          }
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
}
