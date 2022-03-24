import { UserTable } from "./../tableModel";
import { DataService } from "./../../../../services/data.service";
import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";
import { DynamicDialogRef, DialogService } from "primeng/dynamicdialog";
@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
  providers: [DialogService, MessageService],
})
export class ListComponent implements OnInit {
  userList: UserTable[];
  err: any;
  refresh = true;
  constructor(
    private Data: DataService,
    private messageService: MessageService,
    public dialogService: DialogService
  ) {}
  ref: DynamicDialogRef;
  ngOnInit(): void {
    this.getUserDetails();
  }
  getUserDetails(): void {
    this.Data.getUsers().subscribe(
      (data: any) => {
        console.log(data);
        this.userList = data;
        this.refresh = true;
      },
      (err) => {
        this.err = err;
        this.refresh = true;
        this.userList = null;
        this.messageService.add({
          severity: "error",
          summary: "Error Message",
          detail: err,
        });
      }
    );
  }
}
