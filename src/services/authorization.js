import Cookies from 'universal-cookie';

const cookies = new Cookies();

const authService = {

    isAuthenticated () {

        let authenticated = cookies.get('auth') === 'true';
        if(authenticated === undefined)
            authenticated = false;

        return authenticated;

    },

    signIn (cb) {
        cookies.set('auth', true, {path: '/'})
        setTimeout(cb, 100);
    },

    signOut (cb) {
        cookies.set('auth', false, {path: '/'})
        setTimeout(cb, 100);
    }
};

export default authService;