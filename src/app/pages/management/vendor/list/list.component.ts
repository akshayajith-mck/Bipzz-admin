import { ModalComponent } from "./../../../../components/modal/modal.component";
import { MessageService } from "primeng/api";
import { DataService } from "src/app/services/data.service";
import { Component, OnInit } from "@angular/core";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { FacilitatorListingTable } from "../../user/tableModel";

@Component({
  selector: "app-user-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
  providers: [DialogService, MessageService],
})
export class ListComponent implements OnInit {
  facilitatorList: FacilitatorListingTable[];
  refresh = true;
  err:any;
  constructor(
    private Data: DataService,
    private messageService: MessageService,
    public dialogService: DialogService
  ) {}
  ref: DynamicDialogRef;

  ngOnInit(): void {
    this.getFacilitatorDetails();
  }
  getFacilitatorDetails(): void {
    this.Data.getVerifiedFacilitatorData().subscribe(
      (data: any) => {
        console.log(data)
        this.facilitatorList = data?.hospitalData;
        this.refresh = true;
      },
      (err) => {
        this.refresh = true;
        this.facilitatorList = null;
      }
    );
  }
  show() {
    this.ref = this.dialogService.open(ModalComponent, {
      header: "Facilitator Creation",
      width: "50vw",
      data: {
        flag: "facilitatorCreation",
      },
      contentStyle: { "max-height": "750px", overflow: "auto" },
      baseZIndex: 10000,
    });
  }
}
