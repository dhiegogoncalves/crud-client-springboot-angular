import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  tokenUrl: string;

  constructor() {
    this.tokenUrl = environment.tokenUrl;
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = sessionStorage.getItem('@app/accessToken');

    const url = request.url;

    if (token && !url.endsWith(this.tokenUrl)) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token,
        },
      });
    }

    return next.handle(request);
  }
}
