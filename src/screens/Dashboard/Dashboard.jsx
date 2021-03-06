import React, { useEffect, useCallback } from 'react';

import { connect } from 'react-redux';
import { CircularProgress, Grid } from '@material-ui/core'
import { STORE_PRODUCTS, START_FETCHING, STOP_FETCHING } from '../../redux/actions/actions';


import Wrapper from '../../components/Wrapper/Wrapper';
import ProductsTable from '../../components/Table/Table';
import ProductsToolbar from '../../components/ProductsToolbar/ProductsToolbar.jsx';
import { fetchAllProducts } from '../../utils/functions/requisitions'

function Dashboard(props) {
    const { storeProducts, startFetching, stopFetching } = props;
    const { products, isFetching } = props;

    const fetchProducts = useCallback(async () => {
        const response = await fetchAllProducts();
        const { data } = response;
        if (data) {
            startFetching();
            storeProducts(data);
            setTimeout(() => {
                stopFetching()
            }, 1000)
        }
    }, [startFetching, storeProducts, stopFetching])
    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])

    return (
        <Wrapper >
            <Grid container spacing={4}>
                <ProductsToolbar fetchProducts={fetchProducts} />
                {isFetching ?
                    <Grid
                        style={{ marginTop: 20 }}
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <CircularProgress />
                    </Grid>
                    : <ProductsTable products={products} fetchProducts={fetchProducts} />
                }
            </Grid >
        </Wrapper >
    );
}
const mapStateToProps = (state) => {
    return {
        products: state.dashboard.products,
        isFetching: state.dashboard.isFetching
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        storeProducts: (products) => dispatch(STORE_PRODUCTS(products)),
        startFetching: () => dispatch(START_FETCHING()),
        stopFetching: () => dispatch(STOP_FETCHING()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
