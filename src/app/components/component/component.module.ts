
import { AngularMaterialModule } from "./../../module/material.module";
import { NgImageFullscreenViewModule } from "ng-image-fullscreen-view";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminCreationComponent } from "./adminCreation.component";

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    NgImageFullscreenViewModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AdminCreationComponent,
  ],
  exports: [
    AdminCreationComponent,
  ],
  providers: [],
})
export class ComponentModules {}
