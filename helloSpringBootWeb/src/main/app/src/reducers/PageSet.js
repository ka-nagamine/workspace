const initialState = {
    currentPage: 1,
}

export const calReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addResult':
            const page = parseInt(action.payload.page);
            // stateを複製して追加
            const newState = Object.assign({}, state);
            newState.currentPage = 2;
            return newState;
        default:
            return state;
    }
};