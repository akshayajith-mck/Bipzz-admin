import { EventEmitter } from "@angular/core";
import { Output } from "@angular/core";
import { Component, OnInit, Input } from "@angular/core";
import { DialogService, MessageService } from "primeng";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
  providers: [DialogService, MessageService],
})
export class CardComponent implements OnInit {
  userCount: any;
  refresh = true;
  @Input() inputData: any;
  @Input() type: any;
  @Input() flag: any;
  @Input() title: any;
  @Input() fnCall: any;
  @Output() currentPage = new EventEmitter<any>();

  constructor(
    private data: DataService,
    private messageService: MessageService,
    public dialogService: DialogService
  ) {}
  // title = 'Dummy Text';
  ngOnInit(): void {
    this.getUserCount();
  }

  getUserCount() {
    this.data.getUsers().subscribe((data: any) => {
      this.userCount = data.length;
      this.refresh = true;
    });
  }
  doSomething(data: any): void {
    this.currentPage.emit(data);
  }
}
