import { TestBed, inject } from '@angular/core/testing';
import { UserDetailsGuard } from './user/user-details.guard';
describe('UserDetailsGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UserDetailsGuard]
        });
    });
    it('should ...', inject([UserDetailsGuard], (guard) => {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=user-details.guard.spec.js.map