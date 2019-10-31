import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DcLoginComponent } from './components/dc-login/dc-login.component';
import { EncryptionService } from './services/util/encryption.service';
import { DiscourseDataService } from './services/data/discourse-data.service';
import { DiscourseRestService } from './services/rest/discourse-rest.service';

@NgModule({
  declarations: [
    AppComponent,
    DcLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    EncryptionService,
    DiscourseDataService,
    DiscourseRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
