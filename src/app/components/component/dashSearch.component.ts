import { EventEmitter } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { OnInit, Component, Input, Output } from "@angular/core";
import { Router } from "@angular/router";
import { DynamicDialogRef, DynamicDialogConfig } from "primeng/dynamicdialog";
@Component({
  selector: "app-dash-search",
  template: `
    <div *ngIf="!err.err" class="card justify-content-between">
      <div class="card m-2" *ngIf="!err.userDetails">
        <p class="card-header">User</p>
        <div class="list-group">
          <a
            (click)="navi(item.userId, 'user')"
            class="list-group-item cursor-pointer list-group-item-action"
            *ngFor="let item of userDetails"
          >
            {{ item.fullName }}
          </a>
        </div>
      </div>
      <div class="card mt-2" *ngIf="!err.facilitatorDetails">
        <p class="card-header">Facilitator</p>
        <div class="list-group">
          <a
            (click)="navi(item.facilitatorId, 'facilitator')"
            class="list-group-item cursor-pointer list-group-item-action"
            *ngFor="let item of facilitatorDetails"
          >
            {{ item.fullName }}
          </a>
        </div>
      </div>
      <div class="card mt-2" *ngIf="!err.appointmentDetails">
        <p class="card-header">Appointment</p>
        <div class="list-group">
          <a
            (click)="navi(item.eId, 'appointment')"
            class="list-group-item cursor-pointer list-group-item-action"
            *ngFor="let item of appointmentDetails"
          >
          Consulted By:  {{ item.doctorName }}, Patient: {{item.patientName}}
          </a>
        </div>
      </div>
      <div class="card mt-2" *ngIf="!err.doctorDetails">
        <p class="card-header">Doctor</p>
        <div class="list-group">
          <a
            (click)="navi(item.doctorId, 'doctor')"
            class="list-group-item cursor-pointer list-group-item-action hover"
            *ngFor="let item of doctorDetails"
          >
            {{ item.fullName }}
          </a>
        </div>
      </div>
    </div>
    <div class="alert alert-danger" *ngIf="err.err">No Data Found</div>
  `,
})
export class DashSearchComponent implements OnInit {
  @Input() inputData: any;

  @Output() outPutFlag = new EventEmitter<any>();
  dataObject: any;
  userDetails: any;
  facilitatorDetails: null;
  appointmentDetails: null;
  doctorDetails: null;
  err = {
    err: false,
    userDetails: false,
    facilitatorDetails: false,
    appointmentDetails: false,
    doctorDetails: false,
  };
  constructor(
    private router: Router,
    private data: DataService,
    // tslint:disable-next-line:align
    config: DynamicDialogConfig,
    // tslint:disable-next-line:align
    private readonly dialogRef: DynamicDialogRef
  ) {}
  ngOnInit(): void {
    this.getData(this.inputData);
  }
  getData(keyword) {
    this.data.keySearch({ keyword }).subscribe(
      (data) => {
        console.log(data)
        if (data.userDetails && data.userDetails.length > 0) {
          this.userDetails = data.userDetails;
        } else {
          this.err.userDetails = true;
        }
        if (data.appointmentDetails && data.appointmentDetails.length > 0) {
          this.appointmentDetails = data.appointmentDetails;
        } else {
          this.err.appointmentDetails = true;
        }
        if (data.facilitatorDetails && data.facilitatorDetails.length > 0) {
          this.facilitatorDetails = data.facilitatorDetails;
        } else {
          this.err.facilitatorDetails = true;
        }
        if (data.doctorDetails && data.doctorDetails.length > 0) {
          this.doctorDetails = data.doctorDetails;
        } else {
          this.err.doctorDetails = true;
        }
      },
      (error) => (this.err.err = true)
    );
  }
  navi(id, flag) {
    if (flag === "user") {
      this.router.navigate(["/pages/management/user/profile" || "/"], {
        queryParams: { profileId: id },
      });
    }
    if (flag === "facilitator") {
      this.router.navigate(["/pages/management/vendor/profile" || "/"], {
        queryParams: { profileId: id },
      });
    }
    if (flag === "appointment") {
      this.router.navigate(["/pages/management/event/eventProfile" || "/"], {
        queryParams: { profileId: id },
      });
    }
    if (flag === "doctor") {
      this.router.navigate(["/pages/management/vendor/listProfile" || "/"], {
        queryParams: { profileId: id },
      });
    }
    this.dialogRef.close();
  }
}
