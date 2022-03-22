import { RouterModule } from "@angular/router";
import { NotfoundComponent } from "./notfound/notfound.component";
import { FooterComponent } from "./../components/footer/footer.component";
import { AngularMaterialModule } from "./../module/material.module";
import { FormsModule } from "@angular/forms";
import { SidebarComponent } from "./../components/sidebar/sidebar.component";
import { HeaderComponent } from "./../components/header/header.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";

import { PagesComponent } from "./pages.component";
import { BlogComponent } from "./blog/blog.component";
import { BlogProfileComponent } from "./blog-profile/blog-profile.component";

@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    NotfoundComponent,
    BlogComponent,
    BlogProfileComponent,
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
