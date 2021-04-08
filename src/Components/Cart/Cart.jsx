import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles';

export default function Cart({ cart }) {
    
    const isEmpty = Object.keys(cart).length && !cart.line_items.length;
  
    const classes = useStyles();

    const EmptyCart = () => {
        
        <Typography varient="subtitile1">You have no items in your shopping cart</Typography>
    }
    const FilledCart = () => (
        <>
         <Grid container spacing={3}>
                {cart.line_items.map((item )=> (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <div>{item.name}</div>
                    </Grid>
                ))}
            </Grid>
        <div className={classes.cardDetails}>
            <Typography varient="h4">Subtotal : {cart.subtotal.formatted_with_symbol}</Typography>
            <div>
                <Button className={classes.emptyButton} size="large" type="button" varient="contained" color="secondary">Empty Cart</Button>
                <Button className={classes.checkoutButton} size="large" type="button" varient="contained" color="primary">Checkout</Button>
            </div>
        </div>
        </>
    )
    return (
        <Container>
            
            <div className={classes.toolbar} />
            
            <Typography className={classes.title} varient="h3">Your Shopping Cart</Typography>
            {
                isEmpty ? <EmptyCart /> : <FilledCart />
            }
        </Container>
    )}

