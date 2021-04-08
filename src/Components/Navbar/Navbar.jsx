import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, ManuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/logo-main.png';
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';


export default function Navbar({ totalItems }) {
    const classes = useStyles();
    const location = useLocation();

 
    return (
        <>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography component={Link} to="/" varient="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="Commerce.js" height="40px" className={classes.image} />
                    Commcerce.js
                    
                </Typography>
                <div className={classes.grow} />
                { location.pathname == '/' &&
                (<div className={classes.button}>
                    <IconButton component={Link} to="/cart"  aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems}  color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>)}
            </Toolbar>
        </AppBar>
            
        </>
    )
}
