import assert from 'assert';
import authService from '../services/authorization';
import Cookies from 'universal-cookie';


describe('authService', () =>  {

    let cookies = new Cookies();

    describe('initial state', () => {

        beforeEach = () => {
            cookies.remove('auth');
        };

        it('is false by default', () => {
            assert.equal(false, authService.isAuthenticated())
        });

        it('can authorize', () => {
            authService.signIn(() => {})
            assert.equal(true, authService.isAuthenticated())
        });


    });

    describe('in authorized state', () => {

        beforeEach = () => {
            cookies.remove('auth');
            authService.signIn(() => {});
        };

        it('shows as authorized', () => {
            assert.equal(true, authService.isAuthenticated());
        });

        it('shows as authorized twice in a row', () => {
            assert.equal(true, authService.isAuthenticated());
            assert.equal(true, authService.isAuthenticated());
        });

        it('can be signed out', () => {
            authService.signOut(() => {});
            assert.equal(false, authService.isAuthenticated());

            let cookie = cookies.get('auth');
            assert.equal(undefined, cookie);
        });
    });


});