const initialState = {
    total: 0,
}

export const calReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            const num1 = parseInt(action.payload.num1);
            const num2 = parseInt(action.payload.num2);
            // stateを複製して追加
            const newState = Object.assign({}, state);
            newState.total = num1 + num2;
            console.log(newState.total);
            return newState;
        default:
            return state;
    }
};