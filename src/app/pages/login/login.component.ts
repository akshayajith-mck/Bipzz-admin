import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { DataService } from "src/app/services/data.service";
import { MessageService } from "primeng/api";
import { AuthService } from "src/app/services/auth.service";

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
  isSuper: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private data: DataService,
    private auth: AuthService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
  onSubmit(data) {
    if (data.userName === null || data.password === null) {
      this.alertdan = true;
    }
    this.data.login(data).subscribe(
      (succ) => {
        if (succ.success === true) {
          localStorage.setItem("isSuper", succ.isSuper);
          localStorage.setItem("AccessToken", succ.AccessToken);
          localStorage.getItem("AccessToken");
          this.messageService.add({
            severity: "success",
            sticky: false,
            life: 1500,
            summary: "Info Message",
            detail: succ.message,
          });
          this.router.navigate(["/"]);
        } else {
          this.messageService.add({
            severity: "error",
            summary: "Error Message",
          });
          this.router.navigate(["/login"]);
        }
      },
      (err) => {
        this.messageService.add({
          severity: "error",
          summary: "Error Message",
          detail: err,
        });
        this.router.navigate(["/login"]);
      }
    );
  }
}
