import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './style';

export default function Products({ products, onAddToCart }) {
    const classes = useStyles();

    
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={6}>
                {
                    products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={6} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                    ))
                }
            </Grid>
            
        </main>
    )
}
