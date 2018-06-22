import { NgModule } from "@angular/core";
import { PublicRouterModule } from "./public-router.module";
import { LoginComponent } from "./components/login/login.component";
import { LoginService } from "./components/login/login.service";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        PublicRouterModule,
        ReactiveFormsModule,
        CommonModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        LoginService
    ]
})
export class PublicModule{}