import { ModalComponent } from './../../../components/modal/modal.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  providers: [DialogService, MessageService]

})
export class BannerComponent implements OnInit {
  bannerData: any;
  err: any;
  baseurl: any;
  ref: DynamicDialogRef;
  // tslint:disable-next-line:max-line-length
  constructor(public dialogService: DialogService, private router: Router, private data: DataService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getBanner();
    this.baseurl = this.data.baseurl;
  }
  getBanner() {
    this.data.getBanner().subscribe((data: any) => {
      this.bannerData = data.output.length > 0 ? data.output : null;
    }, (err) => {
      this.err = err;
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: err });
    });
  }
  onAdd(): void {
    this.ref = this.dialogService.open(ModalComponent, {
      header: 'Slider Create',
      width: '50vw',
      data: {
        flag: 'banner',
      },
      contentStyle: { 'max-height': '750px', overflow: 'auto', },
      baseZIndex: 10000
    });
}
onclick(item) {
  this.ref = this.dialogService.open(ModalComponent, {
    header: 'Image Change',
    width: '50vw',
    height: '65vh',
    data: {
      flag: 'banner',
      inputData: item
    },
    contentStyle: { 'max-height': '750px', overflow: 'auto', },
    baseZIndex: 10000
  });
}

onDelete(id) {
  this.data.deleteSlider(id)
    .subscribe((data) => {
      this.messageService.add({ severity: 'success', sticky: false, life: 1500, summary: 'Info Message', detail: data.message });
    }, (err) => {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: err });
    }
    );
  this.getBanner();

}
}
