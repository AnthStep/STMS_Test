import { Injectable } from "@angular/core";
import { CanActivate, CanLoad, Router } from "@angular/router";
import { StateService } from "../shared/state.service";

@Injectable()
export class PublicGuard implements CanActivate, CanLoad{
    constructor(private stateService: StateService, private router: Router){}

    public canActivate(){
        return this._checker();
    };

    public canLoad(){
        return this._checker();
    }

    private _checker(){
        const isActive = !!this.stateService.getAuthToken();

        if(!isActive){
            return true;
        }else{
            this.router.navigate(['/auth']);
            return false;
        }

    }

}