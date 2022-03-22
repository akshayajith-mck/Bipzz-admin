import { Component, OnInit } from "@angular/core";
import { FacilitatorListingTable } from "../../user/tableModel";
import { DataService } from "src/app/services/data.service";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-non-verified",
  templateUrl: "./non-verified.component.html",
  styleUrls: ["./non-verified.component.scss"],
  providers: [MessageService],
})
export class NonVerifiedComponent implements OnInit {
  facilitatorList:any;
  err:any
  refresh = true;
  constructor(
    private Data: DataService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.getFacilitatorDetails();
  }
  getFacilitatorDetails(): void {
    this.Data.getNonverifiedFacilitatorData().subscribe(
      (data:any) => {
        console.log('check',data)
        this.facilitatorList = data?.hospitalData;
        console.log('asdasd',this.facilitatorList)
        this.refresh = true;
      },
      (err) => {
        this.refresh = true;
        this.facilitatorList = null;

        this.messageService.add({
          severity: "error",
          summary: "Error Message",
          detail: err,
        });
      }
    );
  }
}
