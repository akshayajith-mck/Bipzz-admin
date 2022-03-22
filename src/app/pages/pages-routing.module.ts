import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PagesComponent } from "./pages.component";
import { NotfoundComponent } from "./notfound/notfound.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
      {
        path: "management",
        children: [
          {
            path: "user",
            loadChildren: () =>
              import("./management/user/user.module").then((m) => m.UserModule),
          },
          {
            path: "vendor",
            loadChildren: () =>
              import("./management/vendor/vendor.module").then(
                (m) => m.VendorModule
              ),
          },
          {
            path: "event",
            loadChildren: () =>
              import("./management/events/events.module").then(
                (m) => m.EventsModule
              ),
          },
          {
            path: "quote",
            loadChildren: () =>
              import("./management/quote/quote.module").then(
                (m) => m.QuoteModule
              ),
          },
          { path: "**", component: NotfoundComponent },
        ],
      },
      {
        path: "general",
        loadChildren: () =>
          import("./general/general.module").then((m) => m.GeneralModule),
      },
      {
        path: "admin",
        loadChildren: () =>
          import("./admin/admin.module").then((m) => m.AdminModule),
      },
      {
        path: "subscription",
        loadChildren: () =>
          import("./subscription/subscription.module").then(
            (m) => m.SubscriptionModule
          ),
      },
      {
        path: "promotions",
        loadChildren: () =>
          import("./promotions/promotions.module").then(
            (m) => m.PromotionsModule
          ),
      },
      {
        path: "faq",
        loadChildren: () => import("./faq/faq.module").then((m) => m.FaqModule),
      },
      {
        path:"blog",
        loadChildren:()=> import("./blog/blog.module").then((m)=>m.BlogModule)
      },
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
      },
      {
        path: "**",
        component: NotfoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
