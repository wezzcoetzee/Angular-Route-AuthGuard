import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GuardModule } from './authguard.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, GuardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
