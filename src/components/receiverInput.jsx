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


export default function ReceiverInput({func}) {
  const classes = useStyles();

  const handleChange = (e) => {
    func(e)
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField onChange={(e) => handleChange(e.target.value)} id="standard-basic" label="Enter Receiver's Account Number" />
    </form>
  );
}