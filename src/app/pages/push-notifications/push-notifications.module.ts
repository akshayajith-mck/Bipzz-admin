import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PushNotificationsRoutingModule } from "./push-notifications-routing.module";
import { AngularMaterialModule } from "src/app/module/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PushNotificationsComponent } from "./push-notifications.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [PushNotificationsComponent],
  imports: [
    CommonModule,
    PushNotificationsRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
})
export class PushNotificationsModule {}
