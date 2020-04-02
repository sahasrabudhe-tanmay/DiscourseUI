import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DiscourseDataService } from '../services/data/discourse-data.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

    constructor(
        private dataService: DiscourseDataService
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const isLoggedIn = this.dataService.isLoggedIn;
        const token = this.dataService.token;

        if(isLoggedIn && token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            })
        }

        return next.handle(request);
    }

}
