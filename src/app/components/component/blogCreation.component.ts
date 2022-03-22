import { DataService } from "src/app/services/data.service";
import { OnInit, Component } from "@angular/core";
import { MessageService } from "primeng/api";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
@Component({
  selector: "app-blog-creation",
  providers: [MessageService],
  template: `
    <p-toast position="top-center"></p-toast>
    <form
      [formGroup]="creationForm"
      novalidate=""
      (ngSubmit)="onUserSubmit(creationForm.value)"
    >
      <div class="form-group">
        <input
          type="text"
          formControlName="title"
          class="form-control"
          placeholder="Enter the Title"
          required
        />
        <span
          class=" mt-1 error error-danger text-danger text-center"
          *ngIf="
            !creationForm.controls['title'].valid &&
            creationForm.controls['title'].touched
          "
        >
          Please enter the Title</span
        >
      </div>
      <div class="form-group">
        <input
          type="text"
          formControlName="description"
          class="form-control"
          placeholder="Enter the Description"
          required
        />
        <span
          class=" mt-1 error error-danger text-danger text-center"
          *ngIf="
            !creationForm.controls['description'].valid &&
            creationForm.controls['description'].touched
          "
        >
          Please enter the description</span
        >
      </div>
      <div class="form-group">
        <input
          type="file"
          formControlName="image"
          class="form-control"
          placeholder="Upload an image"
          (change)="onFileChange($event)"
          required
        />
        <span
          class=" mt-1 error error-danger text-danger text-center"
          *ngIf="
            !creationForm.controls['image'].valid &&
            creationForm.controls['image'].touched
          "
        >
          Upload Image</span
        >
      </div>

      <button
        [disabled]="
          !creationForm.value.title ||
          !creationForm.value.description ||
          !creationForm.value.image
        "
        class="col btn btn-primary"
      >
        Add
      </button>
    </form>
  `,
})
export class BlogCreationComponent implements OnInit {
  flag: any;
  alertdan = false;
  creationForm: FormGroup;
  errorArray = ["", null, undefined];
  constructor(
    private fb: FormBuilder,
    private data: DataService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.creationForm = this.fb.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      image: [null, Validators.required],
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.creationForm.patchValue({
        image: file,
      });
    }
  }

  onUserSubmit(param) {
    const fd = new FormData();
    fd.append("file", this.creationForm.get("image").value);
    if (
      this.errorArray.includes(param.title) ||
      this.errorArray.includes(param.description) ||
      this.errorArray.includes(param.image)
    ) {
      this.alertdan = true;
    }
    fd.append("title", param.title);
    fd.append("description", param.description)
    // for (var pair of fd.values()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }
    this.data.createBlog(fd).subscribe(
      (data) => {
        this.messageService.add({
          severity: "success",
          sticky: false,
          life: 1500,
          summary: "Info Message",
          detail: data.message + " blogId: " + data.blogId,
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
