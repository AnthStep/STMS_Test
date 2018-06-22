import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MockBackend } from '@angular/http/testing';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRouterModule } from './app-router.module';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockService } from './mock/mock.service';
import { StateService } from './shared/state.service';
import { AuthGuard } from './guard/auth.guard';
import { PublicGuard } from './guard/public.guard';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRouterModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    PublicGuard,
    MockService,
    MockBackend,
    StateService,
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
