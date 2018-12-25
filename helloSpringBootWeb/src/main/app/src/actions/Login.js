import axios from '../axios/axios';

const _login = (id, pass, auth) => ({
    type: 'LOGIN',
    id, pass, auth
});

export const login = (id, pass) => {
    return (dispatch) => {
        let params = new URLSearchParams();
        params.append('userid', id);
        params.append('password', pass);
        return axios.post('/login', params).then(result => {
            dispatch(_login(id, '', result.data));
        });

    };
};