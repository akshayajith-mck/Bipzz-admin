import { DataService } from "./../../../services/data.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-flash-promotion",
  templateUrl: "./flash-promotion.component.html",
  styleUrls: ["./flash-promotion.component.scss"],
  providers: [MessageService],
})
export class FlashPromotionComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private data: DataService
  ) {}
  flashPromotionForm: FormGroup;
  typeSelect = [
    {
      title: "Facilitator",
      value: "facilitator",
    },
    {
      title: "User",
      value: "user",
    },
    {
      title: "All",
      value: "all",
    },
  ];
  @ViewChild("fileInput")
  fileInput;
  public files;
  file: File | null = null;
  imgPath: any;

  ngOnInit(): void {
    this.flashPromotionForm = this.fb.group({
      title: ["", Validators.required],
      message: ["", Validators.required],
      type: ["", Validators.required],
      Image: null,
    });
  }
  onSubmit(param): void {
    if (param.Image) {
      const params: FormData = new FormData();
      params.append("title", param.title);
      params.append("message", param.message);
      params.append("type", param.type);
      params.append("picture", param.Image);
      this.data.sendFlashImg(params).subscribe(
        (succ) => {
          this.messageService.add({
            severity: "success",
            sticky: false,
            life: 1500,
            summary: "Info Message",
            detail: succ.message,
          });
        },
        (err) => {
          this.messageService.add({
            severity: "error",
            sticky: false,
            life: 1500,
            summary: "Info Message",
            detail: err,
          });
        }
      );
    } else {
      this.data.sendFlash(param).subscribe(
        (succ) => {
          this.messageService.add({
            severity: "success",
            sticky: false,
            life: 1500,
            summary: "Info Message",
            detail: succ.message,
          });
        },
        (err) => {
          this.messageService.add({
            severity: "error",
            sticky: false,
            life: 1500,
            summary: "Info Message",
            detail: err,
          });
        }
      );
    }
  }
  onFileChangeInput(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
    this.flashPromotionForm.get("Image").setValue(this.file);
  }
  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }
}
