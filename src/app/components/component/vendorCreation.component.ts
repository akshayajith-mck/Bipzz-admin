import { DataService } from "src/app/services/data.service";
import { OnInit, Component } from "@angular/core";
import { MessageService } from "primeng/api";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
@Component({
  selector: "app-vendor-creation",
  providers: [MessageService],
  template: ` <p-toast position="top-center"></p-toast>
    <form
      [formGroup]="creationForm"
      novalidate=""
      (ngSubmit)="onFacilitatorSubmit(creationForm.value)"
    >
      <div class="form-group">
        <input
          type="text"
          formControlName="fullName"
          class="form-control"
          placeholder="Enter the Full Name"
          required
        />
        <span
          class=" mt-1 error error-danger text-danger text-center"
          *ngIf="
            !creationForm.controls['fullName'].valid &&
            creationForm.controls['fullName'].touched
          "
        >
          Please enter Full Name</span
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
          Please enter password</span
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
      </div>
      <span
        class=" mt-1 error error-danger text-danger text-center"
        *ngIf="alertdan"
        >Please enter the details</span
      >
      <div class="form-group">
        <input
          type="text"
          formControlName="address1"
          class="form-control"
          placeholder="Enter the address1"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          formControlName="address2"
          class="form-control"
          placeholder="Enter the address2"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          formControlName="city"
          class="form-control"
          placeholder="Enter City"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          formControlName="country"
          class="form-control"
          placeholder="Enter Country"
        />
      </div>
      <button
        [disabled]="
          !creationForm.value.fullName ||
          !creationForm.value.mobileNo ||
          !creationForm.value.password ||
          !creationForm.value.email
        "
        class="col btn btn-primary"
      >
        Add
      </button>
    </form>`,
})
export class VendorCreationComponent implements OnInit {
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
      fullName: ["", Validators.required],
      address1: ["", Validators.required],
      address2: ["", Validators.required],
      city: ["", Validators.required],
      country: ["", Validators.required],
      password: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      mobileNo: ["", [Validators.required, Validators.minLength(9)]],
    });
  }
  onFacilitatorSubmit(param) {
    if (
      this.errorArray.includes(param.fullName) ||
      this.errorArray.includes(param.mobileNo) ||
      this.errorArray.includes(param.password)
    ) {
      this.alertdan = true;
    }
    const params = {
      email: param.email || "",
      fullName: param.fullName,
      address1: param.address1 || "",
      address2: param.address2 || "",
      city: param.city || "",
      country: param.country || "",
      password: param.password,
      mobileNo: param.mobileNo,
    };
    console.log(param);
    this.data.createFacilitator(params).subscribe(
      (data) => {
        this.messageService.add({
          severity: "success",
          sticky: false,
          life: 1500,
          summary: "Info Message",
          detail: data.message + " facilitatorId: " + data.facilitatorId,
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
