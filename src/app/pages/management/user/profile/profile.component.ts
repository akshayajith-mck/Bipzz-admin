import { DataService } from "src/app/services/data.service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit, Input, ViewChild } from "@angular/core";
import "rxjs/add/operator/filter";
import { MessageService } from "primeng/api";
import { DialogService } from "primeng/dynamicdialog";
import { DynamicDialogRef } from "primeng/dynamicdialog";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
  providers: [DialogService, MessageService],
})
export class ProfileComponent implements OnInit {
  err: any;
  profileData: any;
  profileId: any;
  refresh = true;
  public files;
  @ViewChild("fileInput")
  fileInput;
  file: File | null = null;

  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    private messageService: MessageService,
    public dialogService: DialogService
  ) {}
  ref: DynamicDialogRef;
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.profileId = params.profileId;
    });
    this.userProfile(this.profileId);
  }
  userProfile(id): void {
    this.data.getUserProfile(id).subscribe(
      (data: any) => ((this.profileData = data), (this.refresh = true)),
      (err) => (this.err = err)
    );
  }
}
