import { DataService } from "src/app/services/data.service";
import { OnInit, Component, Input } from "@angular/core";
import { MessageService } from "primeng/api";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-faq-creation",
  providers: [MessageService],
  template: ` <p-toast position="top-center"></p-toast>
    <form
      [formGroup]="faqCreation"
      novalidate=""
      (ngSubmit)="onFaqSubmit(faqCreation.value)"
    >
      <div class="form-group">
        <textarea
          class="form-control"
          rows="5"
          formControlName="question"
          class="form-control"
          placeholder="Enter the Question"
        ></textarea>
      </div>
      <div class="form-group">
        <textarea
          class="form-control"
          rows="5"
          formControlName="answer"
          class="form-control"
          placeholder="Enter the Answer"
        ></textarea>
      </div>
      <button
        [disabled]="!faqCreation.value.answer || !faqCreation.value.question"
        class="col btn btn-primary"
      >
        Create
      </button>
    </form>`,
})
export class FaqCreationComponent implements OnInit {
  faqCreation: FormGroup;
  alertdan = false;
  errorArray = ["", null, undefined];
  @Input() inputData: any;
  constructor(
    private fb: FormBuilder,
    private data: DataService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.faqCreation = this.fb.group({
      answer: ["", Validators.required],
      question: ["", Validators.required],
    });
  }
  onFaqSubmit(param) {
    if (
      this.errorArray.includes(param.answer) ||
      this.errorArray.includes(param.question)
    ) {
      this.alertdan = true;
    }
    this.data.faqCreate(param).subscribe(
      (data) => {
        this.messageService.add({
          severity: "success",
          sticky: false,
          life: 1500,
          summary: "Info Message",
          detail: data.message,
        });
        this.faqCreation.reset();
      },
      (err) => {
        this.messageService.add({
          severity: "error",
          sticky: false,
          life: 1500,
          summary: "Info Message",
          detail: err,
        });
        this.faqCreation.reset();
      }
    );
  }
}
