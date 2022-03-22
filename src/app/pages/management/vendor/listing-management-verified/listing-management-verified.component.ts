
import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { DoctorTable } from '../../user/tableModel';
import { DataService } from 'src/app/services/data.service';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-listing-management-verified',
  templateUrl: './listing-management-verified.component.html',
  styleUrls: ['./listing-management-verified.component.scss'],
  providers: [DialogService, MessageService]

})
export class ListingManagementVerifiedComponent implements OnInit {
  doctorData: DoctorTable[];
  refresh = true;
  constructor(private Data: DataService, private messageService: MessageService, public dialogService: DialogService) {
  }
  ref: DynamicDialogRef;

  ngOnInit(): void {
    this.getDoctors();
  }
  getDoctors(): void {
    this.Data.getVerifiedDoctorData().
      subscribe(data => {
        console.log('doctors',data)
        this.doctorData = data.doctorData;
        this.refresh = true;

      }, (err) => {
        this.refresh = true;
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: err });
      });
  }
  show() {
    this.ref = this.dialogService.open(ModalComponent, {
      header: 'FacilitatorList Creation',
      width: '50vw',
      height: '65vh',
      data: {
        flag: 'facilitatorCreation'
      },
      contentStyle: { 'max-height': '750px', overflow: 'auto', },
      baseZIndex: 10000
    });
  }

}
