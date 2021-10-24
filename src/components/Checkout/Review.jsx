import React from 'react';
import { Typography, List, ListItem, ListItemText, Grid } from '@material-ui/core';

const Review = ({cart}) => {
    return (
        <div>
            {console.log(cart)}
            <Typography variant="h6" gutterBottom>Order Summary</Typography>
            <List disablePadding>
                {cart.line_items.map((item) => (
                    <ListItem key={item.name}>
                        <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`}></ListItemText>
                        <Typography variant="body2">{item.line_total.formatted_with_symbol}</Typography>
                    </ListItem>
                ))}
                <ListItem>
                    <ListItemText primary="Total"/>
                    <Typography variant="subtitle1" style={{fontWeight: 700}}>
                        {cart.subtotal.formatted_with_symbol}
                    </Typography>
                </ListItem>
            </List>
        </div>
    )
}

export default Review
