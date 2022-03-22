import { DynamicDialogRef } from "primeng/dynamicdialog";
import { DataService } from "src/app/services/data.service";
import { OnInit, Component, Input } from "@angular/core";
import { MessageService } from "primeng/api";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
@Component({
  selector: "app-user-updation",
  providers: [MessageService],
  template: `<p-toast position="top-center"></p-toast>
    <form
      [formGroup]="updationForm"
      novalidate=""
      (ngSubmit)="onUserSubmit(updationForm.value)"
    >
      <div class="form-group">
        <label>Enter the First name</label>
        <input
          type="text"
          formControlName="fName"
          class="form-control"
          (ngModelChange)="change = true"
        />
        <span
          class=" mt-1 error error-danger text-danger text-center"
          *ngIf="
            !updationForm.value.fName ||
            (!updationForm.controls['fName'].valid &&
              updationForm.controls['fName'].touched)
          "
        >
          Please enter First Name</span
        >
      </div>
      <div class="form-group">
        <label>Enter the Last name</label>
        <input
          type="text"
          formControlName="lName"
          class="form-control"
          (ngModelChange)="change = true"
        />
        <span
          class=" mt-1 error error-danger text-danger text-center"
          *ngIf="
            !updationForm.value.lName ||
            (!updationForm.controls['lName'].valid &&
              updationForm.controls['lName'].touched)
          "
        >
          Please enter First Name</span
        >
      </div>
      <div class="form-group">
        <label>Enter the mobileNumber</label>
        <input
          (ngModelChange)="change = true"
          type="tel"
          max="10"
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
        <select
          class="form-control"
          formControlName="bloodGroup"
          (ngModelChange)="change = true"
        >
          <option [selected]="updationForm.value.bloodGroup == ''">
            Select the Package Type
          </option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
        <span
          class=" mt-1 error error-danger text-danger text-center"
          *ngIf="
            !updationForm.value.bloodGroup ||
            (!updationForm.controls['bloodGroup'].valid &&
              updationForm.controls['bloodGroup'].touched)
          "
        >
          Please enter blood group</span
        >
      </div>
      <div class="form-group">
        <label>Enter Address 1</label>
        <input
          type="text"
          formControlName="address1"
          class="form-control"
          (ngModelChange)="change = true"
        />
        <span
          class=" mt-1 error error-danger text-danger text-center"
          *ngIf="
            !updationForm.value.address1 ||
            (!updationForm.controls['address1'].valid &&
              updationForm.controls['address1'].touched)
          "
        >
          Please enter address 1</span
        >
      </div>
      <div class="form-group">
        <label>Enter Address 2</label>
        <input
          type="text"
          formControlName="address2"
          class="form-control"
          (ngModelChange)="change = true"
        />
        <span
          class=" mt-1 error error-danger text-danger text-center"
          *ngIf="
            !updationForm.value.address2 ||
            (!updationForm.controls['address2'].valid &&
              updationForm.controls['address2'].touched)
          "
        >
          Please enter address 2</span
        >
      </div>
      <div class="form-group">
        <label>Enter City</label>
        <input
          type="text"
          formControlName="city"
          class="form-control"
          (ngModelChange)="change = true"
        />
        <span
          class=" mt-1 error error-danger text-danger text-center"
          *ngIf="
            !updationForm.value.city ||
            (!updationForm.controls['city'].valid &&
              updationForm.controls['city'].touched)
          "
        >
          Please enter city</span
        >
      </div>
      <div class="form-group">
        <label>Enter Country</label>
        <input
          type="text"
          formControlName="country"
          class="form-control"
          (ngModelChange)="change = true"
        />
        <span
          class=" mt-1 error error-danger text-danger text-center"
          *ngIf="
            !updationForm.value.country ||
            (!updationForm.controls['country'].valid &&
              updationForm.controls['country'].touched)
          "
        >
          Please enter Country</span
        >
      </div>
      <div class="form-group">
        <label>Enter Zip-Code</label>
        <input
          type="number"
          formControlName="zipCode"
          class="form-control"
          (ngModelChange)="change = true"
        />
        <span
          class=" mt-1 error error-danger text-danger text-center"
          *ngIf="
            !updationForm.value.zipCode ||
            (!updationForm.controls['zipCode'].valid &&
              updationForm.controls['zipCode'].touched)
          "
        >
          Please enter Zip-Code</span
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
export class userUpdationComponent implements OnInit {
  flag: any;
  updationForm: FormGroup;
  @Input() inputData: any;

  imageUrl: any;
  change = false;
  defaultValue: any;
  userId: string;
  alertdan = false;
  errorArray = ["", null, undefined];
  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    // tslint:disable-next-line:align
    private data: DataService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.updationForm = this.fb.group({
      userId: [this.inputData.id],
      fName: [this.inputData.fName],
      lName: [this.inputData.lName],
      email: [this.inputData.email, Validators.email],
      mobileNo: [this.inputData.mobileNo, Validators.minLength(9)],
      bloodGroup: [this.inputData.bloodGroup],
      address1: [this.inputData.address1],
      address2: [this.inputData.address2],
      city: [this.inputData.city],
      country: [this.inputData.country],
      zipCode: [this.inputData.zipCode],
    });
  }
  onUserSubmit(param) {
    let respo: any;
    param.mobileNo = `971${param.mobileNo}`;
    param.zipCode = `${param.zipCode}`;
    this.data.updateUser(param).subscribe(
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
        this.messageService.add({
          severity: "error",
          sticky: false,
          life: 1500,
          summary: "Info Message",
          detail: err,
        });
      }
    );
    console.log("usersubmit", param);
    console.log("inputdata", this.inputData);
    this.ref.close(respo);
  }
}
