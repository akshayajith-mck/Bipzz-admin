
import { Component, OnInit, Input } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],

})
export class ModalComponent implements OnInit {
  flag: any;
  inputData: any;
  constructor(public dref: DynamicDialogRef, public config: DynamicDialogConfig) { }
  ngOnInit(): void {
    this.flag = this.config.data.flag;
    this.inputData = this.config.data.inputData;
  }

}
