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
        path: "push-notifications",
        loadChildren: () =>
          import("./push-notifications/push-notifications.module").then(
            (m) => m.PushNotificationsModule
          ),
      },
      {
        path: "admin",
        loadChildren: () =>
          import("./admin/admin.module").then((m) => m.AdminModule),
      },
      
      {
        path: "management",
        children: [
          {
            path: "user",
            loadChildren: () =>
              import("./management/user/user.module").then((m) => m.UserModule),
          },
          { path: "**", component: NotfoundComponent },
        ],
      },
      {
        path: "",
        redirectTo: "management/user",
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
