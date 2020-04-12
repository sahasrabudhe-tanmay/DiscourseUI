import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ZipkinModule } from '@angular-tracing/zipkin';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DcLoginComponent } from './components/dc-login/dc-login.component';
import { EncryptionService } from './services/util/encryption.service';
import { DiscourseDataService } from './services/data/discourse-data.service';
import { DiscourseRestService } from './services/rest/discourse-rest.service';
import { DcRegisterComponent } from './components/dc-register/dc-register.component';
import { DcNavbarComponent } from './components/dc-navbar/dc-navbar.component';
import { DcHomeComponent } from './components/dc-home/dc-home.component';
import { DcPostComponent } from './components/dc-post/dc-post.component';
import { DcRouterWrapperComponent } from './components/dc-router-wrapper/dc-router-wrapper.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AuthenticationInterceptor } from './interceptors/authentication-interceptor.interceptor';
import { CookieService } from '../../node_modules/ngx-cookie-service';
import { AddPostComponent } from './components/add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    DcLoginComponent,
    DcRegisterComponent,
    DcNavbarComponent,
    DcHomeComponent,
    DcPostComponent,
    DcRouterWrapperComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ZipkinModule.forRootWithConfig({
      traceProvider: {
        http: {
          remoteServiceMapping: {
            DiscourseRS: new RegExp('.*/discourse-rs/*')
          }
        },
        logToConsole: true,
        zipkinBaseUrl: 'https://localhost:9411',
        defaultTags: {
          name: 'DiscourseUI'
        }
      },
      localServiceName: 'DiscourseUI'
    })
  ],
  providers: [
    EncryptionService,
    DiscourseDataService,
    DiscourseRestService,
    AuthenticationGuard,
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
