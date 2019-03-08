
import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Interceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        var newReq = request.clone();
        newReq.headers.set('X-RapidAPI-Key', '6a8b1cafa5msh650af5defa86891p1d6fa6jsn0616888a7d4c');
        return next.handle(newReq);

    }

}

