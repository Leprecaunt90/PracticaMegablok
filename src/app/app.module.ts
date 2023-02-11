import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WifiSelectorComponent } from './wifi-selector/wifi-selector.component';
import {HttpClientModule} from '@angular/common/http';
import { InstalationKeyComponent } from './instalation-key/instalation-key.component'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    WifiSelectorComponent,
    InstalationKeyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
