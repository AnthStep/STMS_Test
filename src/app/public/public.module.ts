import { NgModule } from "@angular/core";
import { PublicRouterModule } from "./public-router.module";
import { LoginComponent } from "./components/login/login.component";

@NgModule({
    imports: [
        PublicRouterModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: []
})
export class PublicModule{}