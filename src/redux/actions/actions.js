export const STORE_PRODUCTS = (payload) => ({
    type: 'STORE_PRODUCTS',
    payload: { products: payload }
});

export const SET_NAME = (payload) => ({
    type: 'SET_NAME',
    payload: { name: payload }
});

export const START_FETCHING = () => ({
    type: 'START_FETCHING'
});
export const STOP_FETCHING = () => ({
    type: 'STOP_FETCHING'
});