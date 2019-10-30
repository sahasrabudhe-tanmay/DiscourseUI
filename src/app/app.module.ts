import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DcLoginComponent } from './components/dc-login/dc-login.component';
import { EncryptionService } from './services/util/encryption.service';
import { DiscourseDataService } from './services/discourse-data.service';

@NgModule({
  declarations: [
    AppComponent,
    DcLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    EncryptionService,
    DiscourseDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
