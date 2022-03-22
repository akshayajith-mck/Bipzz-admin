import { EventEmitter } from "@angular/core";
import { Output } from "@angular/core";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() inputData: any;
  @Input() type: any;
  @Input() flag: any;
  @Input() title: any;
  @Input() fnCall: any;
  @Output() currentPage = new EventEmitter<any>();

  constructor() {}
  // title = 'Dummy Text';
  ngOnInit(): void {}
  doSomething(data: any): void {
    this.currentPage.emit(data);
  }
}
