import { DynamicDialogRef } from "primeng/dynamicdialog";
import { DataService } from "src/app/services/data.service";
import { OnInit, Component, Input } from "@angular/core";
import { MessageService } from "primeng/api";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
@Component({
  selector: "app-vendor-updation",
  providers: [MessageService],
  template: `<p-toast position="top-center"></p-toast>
    <form
      [formGroup]="updationForm"
      novalidate=""
      (ngSubmit)="onFacilitatorSubmit(updationForm.value)"
    >
      <div class="form-group">
        <label>Enter the name</label>
        <input
          type="text"
          (ngModelChange)="change = true"
          formControlName="fullName"
          class="form-control"
        />
        <span
          class=" mt-1 error error-danger text-danger text-center"
          *ngIf="
            !updationForm.value.fullName ||
            (!updationForm.controls['fullName'].valid &&
              updationForm.controls['fullName'].touched)
          "
        >
          Please enter the fullName</span
        >
      </div>
      <div class="form-group">
        <label>Enter the mobileNumber</label>
        <input
          type="tel"
          max="10"
          (ngModelChange)="change = true"
          maxlength="10"
          formControlName="mobileNo"
          class="form-control"
        />
        <span
          class=" mt-1 error error-danger text-danger text-center"
          *ngIf="
            !updationForm.value.mobileNo ||
            (!updationForm.controls['mobileNo'].valid &&
              updationForm.controls['mobileNo'].touched)
          "
        >
          Please enter the mobileNumber</span
        >
      </div>
      <div class="form-group">
        <label>Enter the email</label>
        <input
          type="text"
          (ngModelChange)="change = true"
          formControlName="email"
          class="form-control"
        />
        <span
          class=" mt-1 error error-danger text-danger text-center"
          *ngIf="
            !updationForm.value.email ||
            (!updationForm.controls['email'].valid &&
              updationForm.controls['email'].touched)
          "
        >
          Please enter the email</span
        >
      </div>
      <div class="form-group">
        <label>Enter the address 1</label>
        <input
          type="text"
          (ngModelChange)="change = true"
          formControlName="address1"
          class="form-control"
        />
        <span
          class=" mt-1 error error-danger text-danger text-center"
          *ngIf="
            !updationForm.value.address1 ||
            (!updationForm.controls['address1'].valid &&
              updationForm.controls['address1'].touched)
          "
        >
          Please enter the address 1</span
        >
      </div>
      <div class="form-group">
        <label>Enter the address 2</label>
        <input
          type="text"
          (ngModelChange)="change = true"
          formControlName="address2"
          class="form-control"
        />
        <span
          class=" mt-1 error error-danger text-danger text-center"
          *ngIf="
            !updationForm.value.address2 ||
            (!updationForm.controls['address2'].valid &&
              updationForm.controls['address2'].touched)
          "
        >
          Please enter the address 2</span
        >
      </div>
      <div class="form-group">
        <label>Enter the city</label>
        <input
          type="text"
          (ngModelChange)="change = true"
          formControlName="city"
          class="form-control"
        />
        <span
          class=" mt-1 error error-danger text-danger text-center"
          *ngIf="
            !updationForm.value.city ||
            (!updationForm.controls['city'].valid &&
              updationForm.controls['city'].touched)
          "
        >
          Please enter the city</span
        >
      </div>
      <div class="form-group">
        <label>Enter the state</label>
        <input
          type="text"
          (ngModelChange)="change = true"
          formControlName="state"
          class="form-control"
        />
        <span
          class=" mt-1 error error-danger text-danger text-center"
          *ngIf="
            !updationForm.value.state ||
            (!updationForm.controls['state'].valid &&
              updationForm.controls['state'].touched)
          "
        >
          Please enter the state</span
        >
      </div>
      <div class="form-group">
        <label>Enter the country</label>
        <input
          type="text"
          (ngModelChange)="change = true"
          formControlName="country"
          class="form-control"
        />
        <span
          class=" mt-1 error error-danger text-danger text-center"
          *ngIf="
            !updationForm.value.country ||
            (!updationForm.controls['country'].valid &&
              updationForm.controls['country'].touched)
          "
        >
          Please enter the country</span
        >
      </div>
      <div class="form-group">
        <label>Enter the Zip Code</label>
        <input
          type="number"
          (ngModelChange)="change = true"
          formControlName="zipCode"
          class="form-control"
        />
        <span
          class=" mt-1 error error-danger text-danger text-center"
          *ngIf="
            !updationForm.value.zipCode ||
            (!updationForm.controls['zipCode'].valid &&
              updationForm.controls['zipCode'].touched)
          "
        >
          Please enter the zipCode</span
        >
      </div>
      <div class="form-group">
        <label>Enter the url</label>
        <input
          type="url"
          (ngModelChange)="change = true"
          formControlName="url"
          class="form-control"
        />
        <span
          class=" mt-1 error error-danger text-danger text-center"
          *ngIf="
            !updationForm.value.url ||
            (!updationForm.controls['url'].valid &&
              updationForm.controls['url'].touched)
          "
        >
          Please enter the url</span
        >
      </div>
      <span
        class=" mt-1 error error-danger text-danger text-center"
        *ngIf="alertdan"
        >Please enter the details</span
      >
      <button [disabled]="!change" class="col btn btn-primary">Add</button>
    </form>`,
})
// tslint:disable-next-line:class-name
export class vendorUpdationComponent implements OnInit {
  flag: any;
  change = false;
  updationForm: FormGroup;
  @Input() inputData;
  imageUrl: any;
  defaultValue: any;
  faqId: string;
  zipCode: any;
  alertdan = false;
  errorArray = ["", null, undefined, NaN];
  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    private data: DataService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.updationForm = this.fb.group({
      faqId: [this.inputData.id],
      fullName: [this.inputData.fullName],
      email: [this.inputData.email, Validators.email],
      mobileNo: [this.inputData.mobileNo, Validators.minLength(9)],
      address1: [this.inputData.address1],
      address2: [this.inputData.address2],
      city: [this.inputData.city],
      country: [this.inputData.country],
      state: [this.inputData.state],
      zipCode: [this.inputData.zipCode],
      url: [this.inputData.url],
    });
  }
  onFacilitatorSubmit(param) {
    let respo: any;
    param.faqId = `${this.faqId}`;
    param.zipCode = `${this.zipCode}`;
    const params = {
      fadId: param.faqId || "",
      fullName: param.fullName || "",
      email: param.email || "",
      mobileNo: param.mobileNo || "",
      address1: param.address1 || "",
      address2: param.address2 || "",
      city: param.city || "",
      country: param.country || "",
      zipCode: param.zipCode || "",
      url: param.url || "",
    };
    this.data.updateFacilitator(param).subscribe(
      (data) => {
        respo = data;
        this.messageService.add({
          severity: "success",
          sticky: false,
          life: 1500,
          summary: "Info Message",
          detail: data.message,
        });
      },
      (err) => {
        respo = err;
        console.log(err);
        this.messageService.add({
          severity: "error",
          sticky: false,
          life: 1500,
          summary: "Info Message",
          detail: err,
        });
      }
    );
    console.log("faqsubmit", params);
    console.log("inputdata", this.inputData);
  }
}
