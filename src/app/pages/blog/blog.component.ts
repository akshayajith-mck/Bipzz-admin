import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MessageService } from "primeng/api";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { ModalComponent } from "src/app/components/modal/modal.component";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
  providers: [DialogService, MessageService],
})
export class BlogComponent implements OnInit {
  blogData: any;
  err: any;
  baseurl: any;
  refresh = true;
  blogs: any[] = [];

  constructor(
    private data: DataService,
    private messageService: MessageService,
    public dialogService: DialogService,
    private route: ActivatedRoute
  ) {}
  ref: DynamicDialogRef;

  ngOnInit(): void {
    this.blogAll();
  }
  blogAll() {
    this.data.getAllBlog().subscribe(
      (data: any) => {
        this.blogData = data;
        this.refresh = true;
      },
      (err: any) => {
        this.err = err;
        this.refresh = true;
      }
    );
  }
  show() {
    this.ref = this.dialogService.open(ModalComponent, {
      header: "Blog Creation",
      width: "50vw",
      data: {
        flag: "blogCreation",
      },
      contentStyle: { "max-height": "750px", overflow: "auto" },
      baseZIndex: 10000,
    });
  }
}
