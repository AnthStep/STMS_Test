import { Injectable } from "@angular/core";
import { MockBackend } from "@angular/http/testing";

@Injectable()
export class MockService{
    constructor(
        private mock: MockBackend
    ){
        this.mock.connections.subscribe(c => {
            console.log(c);
        })
    }


}