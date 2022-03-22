import { DataService } from "src/app/services/data.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  constructor(private data: DataService) {}
  quoteData: any[];
  refresh = true;
  err: any;
  ngOnInit(): void {
    this.getQuotes();
  }
  getQuotes(): void {
    this.data.getQuotes().subscribe(
      (data) => {
        this.quoteData = data;
        this.refresh = true;
      },
      (err) => {
        this.err = err;
        this.quoteData = null;
      }
    );
  }
}
