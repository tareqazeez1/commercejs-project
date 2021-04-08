import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';

export default function Cart({ cart }) {
    
    const isEmpty = !cart.line_items;

    
  
    const classes = useStyles();

    const EmptyCart = () => {
        
       return (<Typography variant="subtitile1">You have no items in your shopping cart</Typography>)
    }
    const FilledCart = () => (
        <>
         <Grid container spacing={3}>
                {cart.line_items.map((item )=> (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} />
                    </Grid>
                ))}
            </Grid>
        <div className={classes.cardDetails}>
            <Typography variant="h5">Total Price : {cart.subtotal.formatted_with_symbol}</Typography>
            <div>
                <Button variant="contained" className={classes.emptyButton} size="large" type="button" color="secondary">Empty Cart</Button>
                <Button variant="contained" className={classes.checkoutButton} size="large" type="button" color="primary">Checkout</Button>
            </div>
        </div>
        </>
    )

    if(!cart.line_items) return 'Loading.....'
    return (
        <Container>
            
            <div className={classes.toolbar} />
            
            <Typography  align="center" className={classes.title} variant="h4" color="secondary" gutterBottom>Your Items </Typography>
            {
                isEmpty ? <EmptyCart /> : <FilledCart />
            }
        </Container>
    )}

