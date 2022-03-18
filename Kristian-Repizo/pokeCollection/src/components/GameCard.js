import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';

function GameCard({name, classes, image, info}) {

    return(
        <Card className={classes.item}>
            
            <CardContent>
                <CardMedia className={classes.media} image={image} />
                <Link to={info}>
                    <Tooltip title='see more' arrow>
                        <section className={classes.contName}>
                            <Typography className={classes.font}>  
                                {name}
                            </Typography>
                        </section>
                    </Tooltip>
                </Link>
            </CardContent>
        </Card>
    );
}

export default withStyles({
    item: {
        alignItems: "center",
        boxShadow: '2px 1px 29px 6px rgba(0, 0, 0, 0.3)',
        boxSizing: "border-box",
        display: "flex",
        margin: '1em',
        minHeight: "330px",
        minWidth: "330px",
        textAlign: "center"
    },
    media: {
        minHeight: "330px",
        minWidth: "330px"
    },
    contName: {
        alignSelf: 'center',
        backgroundColor: '#3332',
        borderRadius: '10px',
        boxShadow: '2px 1px 29px 6px rgba(0, 0, 0, 0.3)',
        display: 'inline-block',
        margin: '1em 0',
        padding: '3px 9px'
    },
    font: {
        color: '#333',
        font: 'oblique bold 120% cursive',
        fontSize: '30px',
        textDecoration: 'none',
        textTransform: 'capitalize'
    }
})(GameCard);