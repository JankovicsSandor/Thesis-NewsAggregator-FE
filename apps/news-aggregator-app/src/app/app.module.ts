import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataProviderModule } from '@data-provider';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    AppRoutingModule,
    DataProviderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
