import { RouterModule } from "@angular/router";
import { NotfoundComponent } from "./notfound/notfound.component";
import { FooterComponent } from "./../components/footer/footer.component";
import { AngularMaterialModule } from "./../module/material.module";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "./../components/header/header.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";

import { PagesComponent } from "./pages.component";

@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    AngularMaterialModule,
  ],
})
export class PagesModule {}
