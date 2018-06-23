import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators, AbstractControl } from "@angular/forms";
import { LoginService } from "./login.service";
import { StateService } from "../../../shared/state.service";
import { Router } from "@angular/router";

@Component({
    selector: 'stms-login',
    templateUrl: 'login.html',
    styleUrls: ['login.scss', '../../../shared/stms.scss']
})
export class LoginComponent{
    public credGroup: FormGroup;
    public username: AbstractControl;
    public password: AbstractControl;

    constructor(private loginService: LoginService, private stateService: StateService, private router: Router){
        this.credGroup = new FormGroup({
            username: new FormControl('', [Validators.required, Validators.minLength(3)]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)])
        });
        this.username = this.credGroup.get('username');
        this.password = this.credGroup.get('password');
    }

    public loginSubmit(){
        this.loginService.authenticate({username: this.username.value, password: this.password.value})
        .subscribe(({authToken}) => {
            if(authToken){
                this.stateService.setAuthToken(authToken);
                this.router.navigate(['/auth']);
            };
        })
    }
}