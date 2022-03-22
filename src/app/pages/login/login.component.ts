import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { DataService } from "src/app/services/data.service";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  alertsucc = false;
  alertdan = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataSer: DataService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
  onSubmit(data) {
    if (!data.userName  || !data.password) {
      this.alertdan = true;
    }
    this.dataSer.loginSubmit(data).subscribe(
      (succ) => {
console.log(succ)
        localStorage.setItem("AccessToken", succ.AccessToken);
        this.messageService.add({
          severity: "success",
          sticky: false,
          life: 1500,
          summary: "Info Message",
          detail: succ.message,
        });
        this.router.navigate(["dash" || "/"]);
      },
      (error) => {
        this.messageService.add({
          severity: "error",
          summary: "Error Message",
          detail: error,
        });
      }
    );
  }
}
