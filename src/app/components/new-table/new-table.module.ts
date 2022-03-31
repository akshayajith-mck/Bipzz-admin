import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { ToastModule } from "primeng/toast";
import { NewTableComponent } from "./new-table.component";
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [NewTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    ToastModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule,
    MatIconModule
  ],
  exports: [NewTableComponent],
})
export class NewTableModule {}
