import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, ManuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/logo-main.png';
import useStyles from './styles';


export default function Navbar({ totalItems }) {
    const classes = useStyles();
    return (
        <>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography varient="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="Commerce.js" height="40px" className={classes.image} />
                    Commcerce.js
                    
                </Typography>
                <div className={classes.grow} />
                <div className={classes.button}>
                    <IconButton aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems}  color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
            
        </>
    )
}
