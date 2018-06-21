import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MockBackend } from '@angular/http/testing';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRouterModule } from './app-router.module';
import { Http, BaseRequestOptions } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRouterModule,
    HttpClientModule
  ],
  providers: [
    MockBackend,
    BaseRequestOptions,
    {
      provide: HttpClient,
      useFactory: (backend, options)=>{
        return new Http(backend, options)
      },
      deps: [MockBackend, BaseRequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
