import React from 'react'
import SelectSource from './selectSource'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


export default function AddMoney() {
    return (
        <div className='transferMoneyCss'>
            <TextField
                required
                style={{ width: '60ch', margin: 5 }}
                id="filled-required"
                label="Enter Amount to add"
                placeholder='0'
            />
            <SelectSource />
            <Button variant='contained' color='secondary' style={{ width: 200, height: 45, fontSize: 18  }}  >Add</Button>
        </div>
    )
}