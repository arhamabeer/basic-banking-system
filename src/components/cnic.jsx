import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '60ch',
        },
    },
}));

export default function CNIC() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Enter Depositor NIC number" />
        </form>
    );
}