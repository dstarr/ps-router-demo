import assert from 'assert';
import authService from '../services/authService';
import Cookies from 'universal-cookie';


describe('authService', () =>  {

    let cookies = new Cookies();

    describe('initial state', () => {

        beforeEach = () => {
            cookies.remove('auth');
        };

        it('is false by default', () => {
            assert.equal(authService.isAuthenticated(), false)
        });

    });

    describe('in authorized state', () => {

        beforeEach = () => {
            cookies.remove('auth');
            authService.signIn(() => {});
        };

        it('shows as authorized', () => {
            assert.equal(authService.isAuthenticated(), true);
        });

        it('shows as authorized twice in a row', () => {
            assert.equal(authService.isAuthenticated(), true);
            assert.equal(authService.isAuthenticated(), true);
        });

        it('can be signed out', () => {
            authService.signOut(() => {});
            assert.equal(authService.isAuthenticated(), false);

            let cookie = cookies.get('auth');
            assert.equal(undefined, cookie);
        });
    });


});