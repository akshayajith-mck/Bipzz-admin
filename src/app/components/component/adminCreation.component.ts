import { DataService } from "src/app/services/data.service";
import { OnInit, Component, Input } from "@angular/core";
import { MessageService } from "primeng/api";
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl,
} from "@angular/forms";
@Component({
  selector: "app-admin-creation",
  providers: [MessageService],
  template: ` <p-toast position="top-center"></p-toast>
    <form
      [formGroup]="adminForm"
      novalidate=""
      (ngSubmit)="onSubmit(adminForm.value)"
    >
      <div class="form-group">
        <input
          type="text"
          formControlName="userName"
          class="form-control"
          placeholder="Enter the userName"
        />
        <span
          class=" mt-1 error error-danger text-danger text-center"
          *ngIf="
            !adminForm.controls['userName'].valid &&
            adminForm.controls['userName'].touched
          "
        >
          Please enter the userName</span
        >
      </div>
      <div class="form-group">
        <input
          type="password"
          formControlName="password"
          class="form-control"
          placeholder="Enter the password"
        />
        <span
          class=" mt-1 error error-danger text-danger text-center"
          *ngIf="
            !adminForm.controls['password'].valid &&
            adminForm.controls['password'].touched
          "
        >
          Please enter the Password</span
        >
      </div>
      <div class="form-group">
        <button
          class="btn btn-outline-primary"
          [disabled]="!adminForm.value.userName || !adminForm.value.password"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>`,
})
export class AdminCreationComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private data: DataService,
    private messageService: MessageService
  ) {}
  adminForm: FormGroup;
  @Input() inputData: any;
  ngOnInit(): void {
    this.adminForm = this.fb.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
  onSubmit(val) {
    this.data.addAdmin(val).subscribe(
      (data) => {
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
          summary: "Error Message",
          detail: err,
        });
      }
    );
  }
}
