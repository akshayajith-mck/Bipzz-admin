import { DataService } from "src/app/services/data.service";
import { OnInit, Component } from "@angular/core";
import { MessageService } from "primeng/api";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
@Component({
  selector: "app-user-creation",
  providers: [MessageService],
  template: ` <p-toast position="top-center"></p-toast>
    <form
      [formGroup]="creationForm"
      novalidate=""
      (ngSubmit)="onUserSubmit(creationForm.value)"
    >
      <div class="form-group">
        <input
          type="text"
          formControlName="fName"
          class="form-control"
          placeholder="Enter the First Name"
          required
        />
        <span
          class=" mt-1 error error-danger text-danger text-center"
          *ngIf="
            !creationForm.controls['fName'].valid &&
            creationForm.controls['fName'].touched
          "
        >
          Please enter the First Name</span
        >
      </div>
      <div class="form-group">
        <input
          type="text"
          formControlName="lName"
          class="form-control"
          placeholder="Enter the Last Name"
          required
        />
        <span
          class=" mt-1 error error-danger text-danger text-center"
          *ngIf="
            !creationForm.controls['lName'].valid &&
            creationForm.controls['lName'].touched
          "
        >
          Please enter the Last Name</span
        >
      </div>
      <div class="form-group">
        <input
          type="password"
          formControlName="password"
          class="form-control"
          placeholder="Enter the user Password"
          required
        />
        <span
          class=" mt-1 error error-danger text-danger text-center"
          *ngIf="
            !creationForm.controls['password'].valid &&
            creationForm.controls['password'].touched
          "
        >
          Please enter the Password</span
        >
      </div>
      <div class="form-group">
        <input
          type="tel"
          max="10"
          maxlength="10"
          formControlName="mobileNo"
          class="form-control"
          placeholder="Enter the user mobileNumber"
          required
        />
        <span
          class=" mt-1 error error-danger text-danger text-center"
          *ngIf="
            !creationForm.controls['mobileNo'].valid &&
            creationForm.controls['mobileNo'].touched
          "
        >
          Please enter the mobileNumber</span
        >
      </div>
      <div class="form-group">
        <input
          type="text"
          formControlName="email"
          class="form-control"
          placeholder="Enter the user email"
          required
        />
        <span
          class=" mt-1 error error-danger text-danger text-center"
          *ngIf="
            !creationForm.controls['email'].valid &&
            creationForm.controls['email'].touched
          "
        >
          Please enter the email</span
        >
      </div>
      <span
        class=" mt-1 error error-danger text-danger text-center"
        *ngIf="alertdan"
        >Please enter the details</span
      >
      <button
        [disabled]="
          !creationForm.value.fName ||
          !creationForm.value.lName ||
          !creationForm.value.password ||
          !creationForm.value.email ||
          !creationForm.value.mobileNo
        "
        class="col btn btn-primary"
      >
        Add
      </button>
    </form>`,
})
export class UserCreationComponent implements OnInit {
  flag: any;
  creationForm: FormGroup;
  alertdan = false;
  errorArray = ["", null, undefined];
  constructor(
    private fb: FormBuilder,
    private data: DataService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.creationForm = this.fb.group({
      fName: ["", Validators.required],
      lName: ["", Validators.required],
      password: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      mobileNo: ["", [Validators.required, Validators.minLength(9)]],
    });
  }
  onUserSubmit(param) {
    if (
      this.errorArray.includes(param.fName) ||
      this.errorArray.includes(param.lName) ||
      this.errorArray.includes(param.password) ||
      this.errorArray.includes(param.email) ||
      this.errorArray.includes(param.mobileNo)
    ) {
      this.alertdan = true;
    }
    param.mobileNo=`971${param.mobileNo}`
    this.data.createUser(param).subscribe(
      (data) => {
        this.messageService.add({
          severity: "success",
          sticky: false,
          life: 1500,
          summary: "Info Message",
          detail: data.message + " userId: " + data.userId,
        });
        this.creationForm.reset();
      },
      (err) => {
        this.messageService.add({
          severity: "error",
          sticky: false,
          life: 1500,
          summary: "Info Message",
          detail: err,
        });
        this.creationForm.reset();
      }
    );
  }
}
