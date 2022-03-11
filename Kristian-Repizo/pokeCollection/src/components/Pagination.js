import React from 'react';
import { Button, withStyles } from '@material-ui/core';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import Tooltip from '@material-ui/core/Tooltip';

const Pagination = ({increment, decrement, page, classes}) => {
    return(
        <>
        <section className={classes.pagination}>
            <Tooltip title='previous page'>
                <Button variant="contained" onClick={decrement}><ArrowBackIosRoundedIcon></ArrowBackIosRoundedIcon></Button>
            </Tooltip>
            <Button variant="contained">Page {page}</Button>
            <Tooltip title='next page'>
                <Button variant="contained" onClick={increment}><ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon></Button>
            </Tooltip>
        </section>
        </>
    )
}

export default withStyles({
    pagination: {
        display: 'flex',
        justifyContent: 'center'
    },
    title: {
        textAlign: "center",
        fontSize: '40px'
    }
}) (Pagination);