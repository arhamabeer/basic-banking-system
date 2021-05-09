import React, { useState, useEffect } from 'react'
import ReceiverInput from './receiverInput'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import { getFbUsers } from '../store/action'




function TransferMoney({ customers, getFbUsers }) {

    useEffect(() => {
        const getUsers = async () => {
            await getFbUsers();
        }
        getUsers();
    }, []);

    var accounts = customers.map((v) => {
        return v.account_no
    })

    const [acc, setAcc] = useState('')

    const getInput = (e) => {
        setAcc(e)
    }
    var checker = ''
    const handleSearchClick = (e) => {
        var searched = accounts.includes(acc)
        
        checker = searched
        if (searched) {
            var check = ''
            customers.map((v) => {
                return v.account_no === acc ? check = v : 'no'
            })
            console.log(check)
        }
        // console.log(acc, searched)
    }

    // console.log('running...', acc)
    return (
        <div className='transferMoneyCss'>
            <ReceiverInput func={getInput} />
            <Button onClick={() => handleSearchClick()} variant='contained' color='primary' style={{ width: 200, height: 45, fontSize: 18 }}  >Search</Button>
            {
                checker ?
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
                        <Button variant='contained' color='secondary' style={{ width: 200, height: 45, fontSize: 18 }}  >Transfer</Button>
                    </div>
                    : <h1>No Matches Found</h1>
            }
        </div>
    )
}


const mapStateToProps = (state) => ({
    customers: state.customers
})

const mapDispatchToProps = (dispatch) => ({
    getFbUsers: () => dispatch(getFbUsers())

})

export default connect(mapStateToProps, mapDispatchToProps)(TransferMoney)