import { VendorCreationComponent } from "./vendorCreation.component";
import { BannerUpdationComponent } from "./bannerUpdate.component";
import { BannerCreationComponent } from "./bannerCreation.component";
import { AngularMaterialModule } from "./../../module/material.module";
import { NgImageFullscreenViewModule } from "ng-image-fullscreen-view";

import { NgModule } from "@angular/core";
import { UserCreationComponent } from "./userCreation.component";
import { vendorUpdationComponent } from "./vendorUpdation.component";
import { userUpdationComponent } from "./userUpdation.component";
import { FaqUpdationComponent } from "./faqUpdation.component";
import { FaqCreationComponent } from "./faqCreation.component";
import { PromotionCreationComponent } from "./promotionCreation.component";
import { PromotionUpdationComponent } from "./promotionUpdation.component";
import { SubscriptionCreationComponent } from "./subscriptionCreate.component";
import { SubscriptionUpdationComponent } from "./subscriptionUpdation.component";
import { AlbumListViewComponent } from "./albumList.component";
import { GetLiveUpdateComponent } from "./liveUpdate.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DashSearchComponent } from "./dashSearch.component";
import { AdminCreationComponent } from "./adminCreation.component";
import { BlogCreationComponent } from "./blogCreation.component";

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    NgImageFullscreenViewModule,
    ReactiveFormsModule,
  ],
  declarations: [
    UserCreationComponent,
    vendorUpdationComponent,
    userUpdationComponent,
    FaqUpdationComponent,
    FaqCreationComponent,
    PromotionCreationComponent,
    PromotionUpdationComponent,
    SubscriptionCreationComponent,
    SubscriptionUpdationComponent,
    AlbumListViewComponent,
    GetLiveUpdateComponent,
    DashSearchComponent,
    AdminCreationComponent,
    BannerCreationComponent,
    BannerUpdationComponent,
    VendorCreationComponent,
    BlogCreationComponent
  ],
  exports: [
    UserCreationComponent,
    userUpdationComponent,
    vendorUpdationComponent,
    FaqUpdationComponent,
    FaqCreationComponent,
    PromotionCreationComponent,
    PromotionUpdationComponent,
    SubscriptionCreationComponent,
    SubscriptionUpdationComponent,
    AlbumListViewComponent,
    GetLiveUpdateComponent,
    DashSearchComponent,
    AdminCreationComponent,
    BannerCreationComponent,
    BannerUpdationComponent,
    VendorCreationComponent,
    BlogCreationComponent
  ],
  providers: [],
})
export class ComponentModules {}
