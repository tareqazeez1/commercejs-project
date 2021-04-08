import { Grid, Card, Typography, Button, CardActions, CardMedia, CardContent } from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveCart }) => {
         const classes = useStyles();

    return (
        <>
            <Grid container justify="center" spacing={3}>
                <Grid item>
                <Card>
            <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.line_total.fomatted_with_symbol}</Typography>
                
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button onClick={() => onUpdateCartQty(item.id, item.quantity - 1)} type="button" size="small">-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button onClick={() => onUpdateCartQty(item.id, item.quantity + 1)} type="button" size="small">+</Button>

                </div>
                <Button onClick={() => onRemoveCart(item.id)} variant="contained" type="button" color="secondary">Remove</Button>


            </CardActions>
            
        </Card>

                </Grid>
            </Grid>
        </>

    );
};

export default CartItem;