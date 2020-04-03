import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let HttpXsrfInterceptor = class HttpXsrfInterceptor {
    constructor(tokenExtractor) {
        this.tokenExtractor = tokenExtractor;
    }
    intercept(req, next) {
        if (req.method !== 'GET') {
            const headerName = 'X-XSRF-TOKEN';
            let token = this.tokenExtractor.getToken();
            if (token !== null && !req.headers.has(headerName)) {
                req = req.clone({
                    headers: req.headers.set(headerName, token)
                });
            }
            return next.handle(req);
        }
        return next.handle(req);
    }
};
HttpXsrfInterceptor = tslib_1.__decorate([
    Injectable()
], HttpXsrfInterceptor);
export { HttpXsrfInterceptor };
//# sourceMappingURL=xsrf.interceptor.js.map