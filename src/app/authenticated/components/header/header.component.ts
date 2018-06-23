import { Component } from "@angular/core";
import { StateService } from "../../../shared/state.service";
import { Router } from "@angular/router";

@Component({
    selector: 'stms-authenticated-header',
    templateUrl: 'header.html',
    styleUrls: ['header.scss', '../../../shared/stms.scss']
})
export class HeaderComponent{
    constructor(private stateService: StateService, private router: Router){}

    public logOut(): void{
        this.stateService.removeAuthToken();
        this.router.navigate(['/login']);
    }
}