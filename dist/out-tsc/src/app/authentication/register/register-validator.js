export function passwordMatch(c) {
    return c.value.password === c.value.repeatPassword ? null : { passwordMatch: true };
}
//# sourceMappingURL=register-validator.js.map