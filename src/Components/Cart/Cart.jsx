import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';


export default function Cart({ cart, handleEmptyCart, handleUpdateCartQty, handleRemoveCart }) {
    


    
  
    const classes = useStyles();

    const EmptyCart = () => {
        
       return (<Typography variant="subtitile1" align="center">You have no items in your shopping cart,
           <Link to="/" className={classes.link}>Start Adding Items...</Link>
       </Typography>)
    }
    const FilledCart = () => (
        <>
         <Grid container spacing={3}>
                {cart.line_items.map((item )=> (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveCart={handleRemoveCart} />
                    </Grid>
                ))}
            </Grid>
        <div className={classes.cardDetails}>
            <Typography variant="h5">Total Price : {cart.subtotal.formatted_with_symbol}</Typography>
            <div>
                <Button onClick={handleEmptyCart} variant="contained" className={classes.emptyButton} size="large" type="button" color="secondary">Empty Cart</Button>
                <Button component={Link} to="/checkout" variant="contained" className={classes.checkoutButton} size="large" type="button" color="primary">Checkout</Button>
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
                !cart.line_items.length ? <EmptyCart /> : <FilledCart />
            }
        </Container>
    )}

