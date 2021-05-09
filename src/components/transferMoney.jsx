import React from 'react'
import ReceiverInput from './receiverInput'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


export default function TransferMoney() {
    return (
        <div className='transferMoneyCss'>
            <ReceiverInput />
            <Button variant='contained' color='primary' style={{ width: 200, height: 45, fontSize: 18 }}  >Search</Button>
            <div className='transferInfo'>
                <TextField
                    style={{ width: '60ch', margin: 5 }}
                    disabled
                    id="filled-disabled"
                    label="Account Number"
                    defaultValue="090078601"
                    variant="filled"
                />
                <TextField
                    style={{ width: '60ch', margin: 5 }}
                    disabled
                    id="filled-disabled"
                    label="Customer Name"
                    defaultValue="AAA"
                    variant="filled"
                />
                <TextField
                    style={{ width: '60ch', margin: 5 }}
                    disabled
                    id="filled-disabled"
                    label="email id"
                    defaultValue="aaa@gmail.com"
                    variant="filled"
                />
                <TextField
                    style={{ width: '60ch', margin: 5 }}
                    disabled
                    id="filled-disabled"
                    label="branch city"
                    defaultValue="Dubai"
                    variant="filled"
                />
                <TextField
                    required
                    style={{ width: '60ch', margin: 5 }}
                    id="filled-required"
                    label="Enter Money to Transfer"
                    placeholder='0'
                    variant="filled"
                />
            </div>
        </div>
    )
}