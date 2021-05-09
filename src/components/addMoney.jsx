import React, { useState } from 'react'
import SelectSource from './selectSource'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ChequeNo from './cheque_no'
import CNIC from './cnic'
import BankCheque from './cheque_bank'

export default function AddMoney() {

    const [cheque, setCheque] = useState(false)
    const [cash, setCash] = useState(false)

    const SourceCheck = (e) => {
        // console.log('checking ...', e)
        if (e === 'Cheque') {
            setCash(false)
            setCheque(true)
        }
        else if (e === 'Online Cash') {
            setCheque(false)
            setCash(true)
        }
    }
    // console.log('checking ...', cheque, cash)
    return (
        <div className='transferMoneyCss'>
            <TextField
                required
                style={{ width: '60ch', margin: 5 }}
                id="filled-required"
                label="Enter Amount to add"
                placeholder='0'
            />
            <SelectSource func={SourceCheck} />
            {/* {console.log('checking ...', cheque, cash)} */}
            {
                cheque === true ?
                    <div>
                        <BankCheque />
                        <ChequeNo />
                    </div>
                    : cash === true
                        ? <CNIC />
                        : false
            }

            <Button variant='contained' color='secondary' style={{ width: 200, height: 45, fontSize: 18 }}  >Add</Button>
        </div>
    )
}