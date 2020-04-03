var PasswordMatchDirective_1;
import * as tslib_1 from "tslib";
import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { passwordMatch } from 'src/app/authentication/register/register-validator';
let PasswordMatchDirective = PasswordMatchDirective_1 = class PasswordMatchDirective {
    constructor() { }
    validate(control) {
        return passwordMatch(control);
    }
};
PasswordMatchDirective = PasswordMatchDirective_1 = tslib_1.__decorate([
    Directive({
        selector: '[appPasswordMatch][ngModelGroup]',
        providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: PasswordMatchDirective_1,
                multi: true
            }
        ]
    })
], PasswordMatchDirective);
export { PasswordMatchDirective };
//# sourceMappingURL=password-match.directive.js.map