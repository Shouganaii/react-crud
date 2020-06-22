export const newProduct = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_DASHBOARD2_SUCCESS':
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};