import { DataService } from "src/app/services/data.service";
import { OnInit, Component, Input } from "@angular/core";
import { MessageService } from "primeng/api";
import { FormGroup, FormBuilder } from "@angular/forms";
@Component({
  selector: "app-subscription-updation",
  providers: [MessageService],
  template: ` <p-toast position="top-center"></p-toast>
    <form
      [formGroup]="subscriptionUpdate"
      novalidate=""
      (ngSubmit)="onFaqSubmit(subscriptionUpdate.value)"
    >
      <div class="form-group">
        <select
          class="form-control"
          formControlName="planType"
          (ngModelChange)="change = true"
        >
          <option [selected]="subscriptionForm.value.planType == ''">
            Select the Package Type
          </option>
          <option value="monthly">Monthly</option>
          <option value="quartlerly">Quarterly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <div class="form-group">
        <select
          class="form-control"
          formControlName="type"
          (ngModelChange)="change = true"
        >
          <option [selected]="subscriptionForm.value.type == ''">
            Select type
          </option>
          <option value="user">User</option>
          <option value="fac">Facilitator</option>
        </select>
      </div>
      <div class="form-group">
        <input
          type="number"
          class="form-control"
          formControlName="amount"
          placeholder="Enter the Package Amount"
          (ngModelChange)="change = true"
        />
      </div>

      <div class="form-group">
        <input
          type="text"
          class="form-control"
          formControlName="description"
          placeholder="Enter the description"
          (ngModelChange)="change = true"
        />
      </div>
      <div class="form-group">
        <input
          class="form-control"
          type="text"
          formControlName="planName"
          placeholder="Enter the Plan Name"
          (ngModelChange)="change = true"
        />
      </div>
      <button [disabled]="!change" class="col btn btn-primary">Update</button>
    </form>`,
})
export class SubscriptionUpdationComponent implements OnInit {
  subscriptionUpdate: FormGroup;
  @Input() inputData: any;
  change = false;
  planType:any
  constructor(
    private fb: FormBuilder,
    private data: DataService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.subscriptionUpdate = this.fb.group({
      planType: [this.inputData.planType],
      type: [this.inputData.type],
      amount: [this.inputData.amount],
      description: [this.inputData.description],
      planName: [this.inputData.planName],
    });
  }
  onFaqSubmit(param) {
    let respo: any;
    this.data.subscriptionUpdate(param).subscribe(
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
        this.messageService.add({
          severity: "error",
          sticky: false,
          life: 1500,
          summary: "Error Message",
          detail: err,
        });
      }
    );
  }
}
