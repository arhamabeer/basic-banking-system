import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    welcome: {
        marginLeft: 550
    }
}));

export default function ViewAllCustBar({heading, btn}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar style={{ justifyContent: 'space-around' }} variant="dense">
                    <Typography variant="h4" color="inherit">
                        {heading}
                    </Typography>
                    <Button variant="contained" style={{ color: 'white', backgroundColor: '#30302d' }}>
                        {btn}
                        </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}