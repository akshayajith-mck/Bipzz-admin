import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DialogService, MessageService]
})
export class HeaderComponent implements OnInit {
  search = false;
  myControl = new FormControl();
  searchKeyword;
  ref: DynamicDialogRef;
  auth = false;
  outPutFlag: any;
  constructor(private data: DataService, private router: Router, public dialogService: DialogService) { }
  ngOnInit(): void {
    this.auth = localStorage.activity ? localStorage.activity : true;
  }
  onSearch() {
    if (this.searchKeyword) {
      this.ref = this.dialogService.open(ModalComponent, {
        header: 'Search List',
        width: '80vw',
        height: '85vh',
        data: {
          flag: 'dashSearch',
          inputData: this.searchKeyword,
        },
        contentStyle: { 'max-height': '750px', overflow: 'auto', },
        baseZIndex: 10000
      });
    }
  }
  signOut() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
