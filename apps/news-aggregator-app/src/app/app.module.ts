import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataProviderModule } from '@data-provider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { LoaderIndicatorService } from '../services/loader/loader-indicator.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderIndicatorInterceptor } from '../interceptor/loader-indicator.interceptor';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent, LoadingIndicatorComponent],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    AppRoutingModule,
    MatButtonModule,
    DataProviderModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressBarModule,
    ToastrModule.forRoot()
  ],
  providers: [
    LoaderIndicatorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderIndicatorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
