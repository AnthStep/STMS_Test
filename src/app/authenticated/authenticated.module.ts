import { NgModule } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { AuthenticatedComponent } from "./authenticated.component";
import { AuthenticatedRouterModule } from "./authenticated-router.module";

@NgModule({
    imports: [
        AuthenticatedRouterModule
    ],
    declarations: [
        HeaderComponent,
        AuthenticatedComponent
    ],
    providers: []
})
export class AuthenticatedModule{}