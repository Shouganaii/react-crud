export const STORE_PRODUCTS = (payload) => ({
    type: 'STORE_PRODUCTS',
    payload: { products: payload }
});
export const START_FETCHING = () => ({
    type: 'START_FETCHING'
});
export const STOP_FETCHING = () => ({
    type: 'STOP_FETCHING'
});