import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MessageService } from "primeng";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-push-notifications",
  templateUrl: "./push-notifications.component.html",
  styleUrls: ["./push-notifications.component.scss"],
  providers: [MessageService],
})
export class PushNotificationsComponent implements OnInit {
  json: any;
  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private data: DataService
  ) {}
  pushNotificationForm: FormGroup;
  @ViewChild("fileInput")
  fileInput;
  public files;
  file: File | null = null;
  imgPath: any;
  ngOnInit(): void {
    this.pushNotificationForm = this.fb.group({
      title: ["", Validators.required],
      message: ["", Validators.required],
      image: null,
      serviceFlag: false,
    });
  }
  onSubmit(param): void {
    const data = {
      notification_Data: {
        message: param.message,
        title: param.title,
        image: param.image || "",
        serviceFlag: param.serviceFlag,
      },
    };
    console.log(data);
    this.data.sendNotification(data).subscribe(
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

  // onFileChangeInput(): void {
  //   const files: { [key: string]: File } = this.fileInput.nativeElement.files;
  //   this.file = files[0];
  //   this.pushNotificationForm.get("image").setValue(this.file);
  // }
  // onClickFileInputButton(): void {
  //   this.fileInput.nativeElement.click();
  // }
}
