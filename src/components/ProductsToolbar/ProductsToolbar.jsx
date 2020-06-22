import React from 'react';
import { Grid, Toolbar, AppBar } from '@material-ui/core'
import AddProductDialog from '../ProductDialogs/AddProductDialog';

function ProductsToolbar({ fetchProducts }) {

    return (
        <AppBar position="relative">
            <Toolbar>
                <Grid item
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="flex-start">
                    <AddProductDialog fetchProducts={fetchProducts} />
                </Grid>
            </Toolbar>
        </AppBar >
    );
}

export default ProductsToolbar;
