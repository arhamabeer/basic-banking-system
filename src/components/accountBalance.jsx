import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    main: {
        margin: -80
    },

    paper: {
        height: 140,
        width: 500,
        boxShadow: '1px 1px 20px grey',
        backgroundColor: '#ededeb',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function AccountBalance({ balance }) {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    // console.log(balance)

    return (
        <Grid className={classes.main} container className={classes.root} spacing={2}>
            <Grid style={{ marginTop: -200 }} item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    <Grid >
                        <Paper variant='elevation' className={classes.paper} >
                            <Typography variant='h5' style={{ textDecoration: 'underline' }} >
                                Account Balance
                            </Typography>
                            <Typography variant='h2'>
                                <CountUp start={0} end={balance} separator={','}  duration={3} />
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}