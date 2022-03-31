import { ReactiveFormsModule } from "@angular/forms";
import { ComponentModules } from "./component/component.module";
import { AngularMaterialModule } from "./../module/material.module";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ModalComponent } from "./modal/modal.component";
import { CardComponent } from "src/app/components/card/card.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NewTableModule } from "./new-table/new-table.module";
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    NgbModule,
    MatPaginatorModule,
    ComponentModules,
    NewTableModule,
  ],
  declarations: [
    CardComponent,
    ModalComponent,
  ],
  exports: [
    RouterModule,
    ComponentModules,
    CommonModule,
    NgbModule,
    AngularMaterialModule,
    CardComponent,
    ModalComponent,
    NewTableModule,
  ],
  providers: [],
})
export class AllComponentModules {}
