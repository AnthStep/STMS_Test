import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class LoginService{
    constructor(private http: HttpClient){}

    public authenticate({username,password}){
        const token = btoa(username + password);
        return this.http.post('authenticate', {token,username}).pipe(map((val: any) => val._body));
    }
}