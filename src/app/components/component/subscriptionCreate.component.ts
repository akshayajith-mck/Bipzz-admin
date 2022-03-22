import { DataService } from "src/app/services/data.service";
import { OnInit, Component, Input } from "@angular/core";
import { MessageService } from "primeng/api";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-subscription-creation",
  providers: [MessageService],
  template: ` <p-toast position="top-center"></p-toast>
    <form
      [formGroup]="subscriptionForm"
      novalidate=""
      (ngSubmit)="onFaqSubmit(subscriptionForm.value)"
    >
      <div class="form-group">
        <select class="form-control" formControlName="planType">
          <option [selected]="subscriptionForm.value.planType == ''">
            Select the Package Type
          </option>
          <option value="monthly">Monthly</option>
          <option value="quartlerly">Quarterly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <div class="form-group">
        <select class="form-control" formControlName="type">
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
        />
      </div>

      <div class="form-group">
        <input
          type="text"
          class="form-control"
          formControlName="description"
          placeholder="Enter the description"
        />
      </div>
      <div class="form-group">
        <input
          class="form-control"
          type="text"
          formControlName="planName"
          placeholder="Enter the Plan Name"
        />
      </div>
      <!-- <div class="form-group">
    <input type='number' class="form-control" formControlName="min" placeholder="Valid from the Amount ">
    </div>
    <div class="form-group">
    <input type='number' class="form-control" formControlName="max" placeholder="Valid upto  the Amount">
    </div> -->
      <button
        [disabled]="
          !subscriptionForm.value.amount ||
          !subscriptionForm.value.description ||
          !subscriptionForm.value.type ||
          !subscriptionForm.value.planType||
          !subscriptionForm.value.planName
        "
        class="col btn btn-primary"
      >
        Create
      </button>
    </form>`,
})
export class SubscriptionCreationComponent implements OnInit {
  subscriptionForm: FormGroup;
  errorArray = ["", null, undefined];
  type: string;
  @Input() inputData: any;
  constructor(
    private fb: FormBuilder,
    private data: DataService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.subscriptionForm = this.fb.group({
      planType: ["", Validators.required],
      type: ["", Validators.required], //user or fac
      amount: ["", Validators.required],
      description: ["", Validators.required],
      planName: ["", Validators.required],
    });
  }
  onFaqSubmit(param) {
    param.amount=`${param.amount}`
    this.data.subscriptionCreate(param).subscribe(
      (data) => {
        this.messageService.add({
          severity: "success",
          sticky: false,
          life: 1500,
          summary: "Info Message",
          detail: data.message,
        });
        this.subscriptionForm.reset();
      },
      (err) => {
        this.messageService.add({
          severity: "error",
          sticky: false,
          life: 1500,
          summary: "Info Message",
          detail: err,
        });
        this.subscriptionForm.reset();
      }
    );
  }
}
