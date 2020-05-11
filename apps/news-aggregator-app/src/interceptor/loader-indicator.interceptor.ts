import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderIndicatorService } from '../services/loader/loader-indicator.service';
import { tap, finalize } from 'rxjs/operators';

@Injectable()
export class LoaderIndicatorInterceptor implements HttpInterceptor {
  count = 0;
  constructor(private indicatorService: LoaderIndicatorService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.indicatorService.setProgressBarVisibility(true);

    this.count++;

    return next
      .handle(request)

      .pipe(
        tap(
          event => console.log(event),

          error => console.log(error)
        ),
        finalize(() => {
          this.count--;

          if (this.count == 0)
            this.indicatorService.setProgressBarVisibility(false);
        })
      );
  }
}
