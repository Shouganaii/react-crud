const initialState = {
    products: [],
    isFetching: false,
    shouldReload: false,
    name: 'Fulano'
}

export const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload.name }

        case 'STORE_PRODUCTS':
            return { ...state, products: action.payload.products }

        case 'START_FETCHING':
            return { ...state, isFetching: true }

        case 'STOP_FETCHING':
            return { ...state, isFetching: false }

        default:
            return state;
    }
};