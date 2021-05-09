import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },

}));

export default function HomeFoot() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{backgroundColor: 'black'}}>
                <Toolbar variant="dense">
                    <Typography style={{marginLeft: '40%'}} variant="body" color="inherit">
                        &#169; AAA BANK all right reserved 2021
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}