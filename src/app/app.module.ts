import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { MaterialModule } from "@angular/material";

import { AppComponent } from './app.component';
import { TwcardComponent } from './twcard/twcard.component';
import { TwcontainerComponent } from './twcontainer/twcontainer.component';
import { TwserviceService } from './twservice.service';


@NgModule({
  declarations: [
    AppComponent,
    TwcardComponent,
    TwcontainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    TwserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
