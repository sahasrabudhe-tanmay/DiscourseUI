import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DcLoginComponent } from './components/dc-login/dc-login.component';
import { EncryptionService } from './services/util/encryption.service';
import { DiscourseDataService } from './services/data/discourse-data.service';
import { DiscourseRestService } from './services/rest/discourse-rest.service';
import { DcRegisterComponent } from './components/dc-register/dc-register.component';
import { DcNavbarComponent } from './components/dc-navbar/dc-navbar.component';
import { DcHomeComponent } from './components/dc-home/dc-home.component';

@NgModule({
  declarations: [
    AppComponent,
    DcLoginComponent,
    DcRegisterComponent,
    DcNavbarComponent,
    DcHomeComponent
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
    DiscourseRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
