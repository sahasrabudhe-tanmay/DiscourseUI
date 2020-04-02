import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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

@NgModule({
  declarations: [
    AppComponent,
    DcLoginComponent,
    DcRegisterComponent,
    DcNavbarComponent,
    DcHomeComponent,
    DcPostComponent,
    DcRouterWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
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
