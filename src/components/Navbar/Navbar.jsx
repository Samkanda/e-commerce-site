import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import useStyles from './styles';
import {Link, useLocation} from 'react-router-dom';

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();
    return (
        <AppBar position="relative" className={classes.appBar} >
            <Toolbar>
                <Typography variant="h6" component={Link} to="/" className={classes.title} color="inherit">
                    
                    NIKE
                </Typography>
                <div className={classes.grow}/>
                {location.pathname === '/' && (
                <div className={classes.button}>
                    <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                </div>)}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
