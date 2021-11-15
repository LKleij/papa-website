import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutMeComponent } from "./about-me/about-me.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { ServicesComponent } from "./services/services.component";

const routes: Routes = [
    {path: "", component: HomepageComponent},
    {path: "services", component: ServicesComponent},
    {path: "aboutme", component: AboutMeComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {};