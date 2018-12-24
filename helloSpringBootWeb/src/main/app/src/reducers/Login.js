const initialState = {
    id: '',
    pass: '',
    isAddMode: false,
    auth: 'ログイン前',
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            const newState = Object.assign({}, state);
            newState.auth = action.auth;
            console.log('redu:' + newState.auth);
            return newState;
        default:
            return state;
    }
};