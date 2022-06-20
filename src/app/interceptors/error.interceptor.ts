import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

import Swal from 'sweetalert2';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.handleError(error);
        return throwError(() => error);
      })
    );
  }

  handleError(error: HttpErrorResponse): void {
    let errorMsg = {
      type: '',
      message: ''
    };
    if (error.error instanceof ErrorEvent) {
      errorMsg.type = 'Error de lado del CLIENTE.';
      errorMsg.message = `Error: ${error.error.message}`;
    } else {
      errorMsg.type = 'Error de lado del SERVIDOR.';
      errorMsg.message = `Error Code: ${error.status},  Message: ${error.message}`;
    }

    Swal.fire({
      title: errorMsg.type,
      text: errorMsg.message,
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }
}
