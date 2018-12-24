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
        console.log('paramid:' + id);
        return axios.post('/login', params).then(result => {
            // console.log(result.data);
            console.log('id:' + id);
            console.log('result:' + result);
            console.log('resultauth:' + result.data);
            console.log('resultauth:' + result.auth);
            // console.log(auth);
            // dispatch(_login(id, pass, auth));
            dispatch(_login(id, '', result.data));
        });
        //     return axios.post('/login',
        //         {
        //             userid: 'test',
        //             passwprd: 'testtest'
        //         }).then(result => {
        //             dispatch(_login(result.data));
        //         });

    };
};





// export const login = (userlogin = {
//     id: '',
//     pass: '',
//     auth: ''
// }) => {
//     return (dispatch) => {
//         const loginRs = {
//             id: userlogin.id,
//             pass: userlogin.pass,
//             auth: userlogin.auth
//         }
//         let params = new URLSearchParams();
//         console.log(loginRs.id);
//         params.append('userid', loginRs.id);
//         params.append('password', loginRs.pass);
//         return axios.post('/login', params).then(result => {
//             console.log(result.data);
//             // dispatch(_login(id, pass, auth));
//             dispatch(_login(result.data));
//         });
//         //     return axios.post('/login',
//         //         {
//         //             userid: 'test',
//         //             passwprd: 'testtest'
//         //         }).then(result => {
//         //             dispatch(_login(result.data));
//         //         });

//     };
// };