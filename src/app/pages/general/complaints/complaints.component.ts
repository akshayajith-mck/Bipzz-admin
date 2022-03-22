import { tableHead } from './../../../module/tableHead';
import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss']
})
export class ComplaintsComponent implements OnInit {

  constructor(private data: DataService) { }
  complaintData: any;
  err = false;
  refresh = true;
  ngOnInit(): void {
    this.getComplaints();
  }
  getComplaints() {

    this.data.getComplaints()
      .subscribe((data) => {
        this.complaintData = data;
      },
        (err) => {
          this.err = err;
        });
    this.refresh = true;
  }
}
