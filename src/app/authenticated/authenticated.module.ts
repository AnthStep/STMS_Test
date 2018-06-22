import { NgModule } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { AuthenticatedComponent } from "./authenticated.component";
import { AuthenticatedRouterModule } from "./authenticated-router.module";
import { CommonModule } from "@angular/common";
import { WelcomeTimerDirective } from "./directives/welcome.directive";

@NgModule({
    imports: [
        AuthenticatedRouterModule,
        CommonModule
    ],
    declarations: [
        HeaderComponent,
        AuthenticatedComponent,
        WelcomeTimerDirective
    ],
    providers: []
})
export class AuthenticatedModule { }