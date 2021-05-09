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

export default function SelectSource({func}) {
    const classes = useStyles();
    const [source, setSource] = React.useState('');

    const handleChange = (event) => {
        setSource(event.target.value);
    };
    func(source)

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Source of Money</InputLabel>
                <Select
                    style={{ width: '58ch' }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={source}
                    onChange={handleChange}
                >
                    <MenuItem value={'Cheque'}>Cheque</MenuItem>
                    <MenuItem value={'Online Cash'}>Online Cash</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}