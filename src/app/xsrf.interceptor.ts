
import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpXsrfTokenExtractor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class HttpXsrfInterceptor implements HttpInterceptor {

  constructor(private tokenExtractor: HttpXsrfTokenExtractor) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     if(req.method !== 'GET'){


    const headerName = 'X-XSRF-TOKEN';
    let token = this.tokenExtractor.getToken() as string;
    if (token !== null && !req.headers.has(headerName)) {
      req = req.clone(
        { 
          headers: req.headers.set(headerName, token) 
        }
        );
    }
    return next.handle(req);
  }
  return next.handle(req);


  }
}