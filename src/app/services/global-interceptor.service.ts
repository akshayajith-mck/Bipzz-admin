import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalInterceptorService {
  constructor(private router: Router, private auth: AuthService) {
    const interval = 60 * 60 * 1000;
    setTimeout(() => {
      this.auth.removeToken();
    }, interval);
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let currentReq = req;
    if (this.auth.isAuthorized) {
      const token = this.auth.getToken();
      currentReq = req.clone({ setHeaders: { Authorization: 'Bearer ' + token } });
    } 
    return next.handle(currentReq)
      .pipe(
        tap((ev: HttpEvent<any>) => {
          if (ev instanceof HttpResponse) {
            if (ev.body && ev.body.error === 9999) {
              this.router.navigate(['']);
            }
          }
        }),
        retry(0),
        catchError((error: HttpErrorResponse) => {
          console.log('error',error)
          let errMsg = '';
          if (error.status === 401) {
            window.alert(error.statusText);
            this.router.navigate(['/login']);
          }
          if (error.error instanceof ErrorEvent) {
            // client-side erro
            errMsg = error.error.message;
          } else {
            errMsg = error.error.message ? error.error.message : error.statusText;
          }
          return throwError(errMsg);
        })
      );
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.isAuthorized()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

