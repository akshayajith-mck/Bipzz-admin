import { ModalComponent } from "./../../components/modal/modal.component";
import { DataService } from "./../../services/data.service";
import { Component, OnInit } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-subscription",
  templateUrl: "./subscription.component.html",
  styleUrls: ["./subscription.component.scss"],
  providers: [ConfirmationService, DialogService, MessageService],
})
export class SubscriptionComponent implements OnInit {
  errFlag = false;
  create = false;
  refresh = true;
  subscriData: any[] = [];
  subscriptionData: any;
  subscriptionId: any;
  constructor(
    private data: DataService,
    // tslint:disable-next-line:align
    private messageService: MessageService,
    // tslint:disable-next-line:align
    private confirmationService: ConfirmationService,
    // tslint:disable-next-line:align
    public dialogService: DialogService,
    private route: ActivatedRoute
  ) {}
  ref: DynamicDialogRef;
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.subscriptionId = params.subscriptionId;
      console.log({ params });
    });
    this.getSubcription();
  }
  getSubcription() {
    console.log("subs", this.subscriData);
    this.data.subscriptionGet().subscribe(
      (data) => {
        this.subscriData = data.subscriptionData;
        this.errFlag = false;
      },
      (err) => {
        this.errFlag = true;
        this.subscriData = null;
      }
    );
    this.refresh = true;
  }
  show(data) {
    if (data) {
      this.ref = this.dialogService.open(ModalComponent, {
        header: "Subscription Updation",
        width: "50vw",
        data: {
          flag: "subscription",
          inputData: { ...(this.subscriData = data.subscriptionData) },
        },
        contentStyle: { "max-height": "350px", overflow: "auto" },
        baseZIndex: 10000,
      });
    } else {
      this.ref = this.dialogService.open(ModalComponent, {
        header: "Subscription Creation",
        width: "50vw",
        data: {
          flag: "subscription",
          inputData: null,
        },
      });
    }
    this.getSubcription();
  }
  delete(subscriptionId) {
    console.log("id", subscriptionId);
    this.data.subscriptionDelete(subscriptionId).subscribe(
      (data) => {
        this.messageService.add({
          severity: "success",
          sticky: false,
          life: 1500,
          summary: "Successful Message",
          detail: `${data.message}`,
        });
        this.getSubcription();
      },
      (err) =>
        this.messageService.add({
          severity: "error",
          sticky: false,
          life: 1500,
          summary: "Unsuccessfull Message",
          detail: `${err.message}`,
        })
    );
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
