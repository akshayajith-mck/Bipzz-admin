import { DataService } from 'src/app/services/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [DialogService, MessageService]

})
export class CarouselComponent implements OnInit {

  constructor(private data: DataService, private messageService: MessageService, public dialogService: DialogService) {
  }
  @Input() flag: any;
  sliderDetails: any;
  @Input() inputData: any;
  baseurl: any;
  error: any;
  paused = false;
  ngOnInit(): void {
    this.baseurl = this.data.baseurl;
    switch (this.flag) {
      case 'bannerCall': {
        this.getBanner();
        break;
      }
      case 'doctor': {
        this.sliderDetails = this.inputData;
        break;
      }
      default: {
        window.alert('Eror');
      }
    }
  }
  getBanner() {
    this.data.getBanner().subscribe(
      (data) => {
        this.sliderDetails = data.output;
      },
      (err) => {
        window.alert(err);
        this.error = err;
      });
  }
}
