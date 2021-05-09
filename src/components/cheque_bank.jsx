import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Bank of Depositing Cheque</InputLabel>
        <Select
          style={{ width: '58ch' }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={'Bank Of Karachi'}>Bank Of Karachi</MenuItem>
          <MenuItem value={'Bank Of Dubai'}>Bank Of Dubai</MenuItem>
          <MenuItem value={'Bank Of Sydney'}>Bank Of Sydney</MenuItem>
          <MenuItem value={'Bank Of London'}>Bank Of London</MenuItem>
          <MenuItem value={'Bank Of Tokyo'}>Bank Of Tokyo</MenuItem>
          <MenuItem value={'Bank Of Riyadh'}>Bank Of Riyadh</MenuItem>
          <MenuItem value={'Bank Of Madrid'}>Bank Of Madrid</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}