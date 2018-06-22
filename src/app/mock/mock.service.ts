import { Injectable } from "@angular/core";
import { MockBackend, MockConnection } from "@angular/http/testing";
import { Response, ResponseOptions } from "@angular/http";

@Injectable()
export class MockService{
    constructor(
        private mock: MockBackend
    ){

    }

    public initMock(): void{
        this.mock.connections.subscribe(connection => {
            this._authenticate(connection);
        })
    }

    private _authenticate(connection: MockConnection){
        if(connection.request.url === 'authenticate'){
            const body = JSON.parse(connection.request.getBody());
            const token = body.token;

            if(token){
                const authToken: any = btoa(token);
                connection.mockRespond(new Response(new ResponseOptions({
                    body: {authToken}
                })));
            }else{
                connection.mockError(new Error('No token provided'));
            }
        }
    }


}