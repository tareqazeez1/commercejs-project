import { Grid, Card, Typography, Button, CardActions, CardMedia, CardContent } from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ item }) => {
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
                    <Button type="button" size="small">-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small">+</Button>

                </div>
                <Button variant="contained" type="button" color="secondary">Remove</Button>


            </CardActions>
            
        </Card>

                </Grid>
            </Grid>
        </>

    );
};

export default CartItem;