import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MockBackend } from "@angular/http/testing";

@Component({
    selector: 'stms-login',
    templateUrl: 'login.html',
    styleUrls: ['login.scss']
})
export class LoginComponent{
    constructor(private http: HttpClient, private mock: MockBackend){
        this.http.get('test').subscribe(res=>{
            console.log(res);
        });

    }
}