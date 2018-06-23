import { NgModule } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { AuthenticatedComponent } from "./authenticated.component";
import { AuthenticatedRouterModule } from "./authenticated-router.module";
import { CommonModule } from "@angular/common";
import { RemoveTimerDirective } from "./directives/removeTimer.directive";
import { DragableDirective } from "./directives/dragable.directive";
import { UserService } from "./services/user.service";

@NgModule({
    imports: [
        AuthenticatedRouterModule,
        CommonModule
    ],
    declarations: [
        HeaderComponent,
        AuthenticatedComponent,
        RemoveTimerDirective,
        DragableDirective
    ],
    providers: [
        UserService
    ]
})
export class AuthenticatedModule { }