import React, { useEffect, useState } from 'react'
import DataTable from '../components/allCustTable'
import { connect } from 'react-redux'
import { send_user, getFbUsers } from '../store/action'
import ViewAllCustBar from '../components/viewAllCustHeader'
import AccountBalance from '../components/accountBalance'
import Button from '@material-ui/core/Button';
import PartCustTable from '../components/partCustTable'
import AddMoney from '../components/addMoney'
import TransferMoney from '../components/transferMoney'
import { findAllByDisplayValue } from '@testing-library/dom'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

function ParticularCustomers(props) {
    const [activeT, setActiveT] = useState(false)
    const [activeA, setActiveA] = useState(false)


    const balance = props.location.state.balance
    const c_name = props.location.state.name
    const data = [];
    data.push(props.location.state)

    const handleTransferClick = () => {
        setActiveA(false)
        setActiveT(true)
    }
    const handleAddClick = () => {
        setActiveT(false)
        setActiveA(true)
    }
    const handleCancelClick = () => {
        setActiveT(false)
        setActiveA(false)
        // console.log('hala madrid')
    }


    // console.log('handleTransferClick', active)
    // console.log('props>>,', props.location.state)

    return (
        <div>
            <div>
                <ViewAllCustBar heading={c_name} btn='History' />
                <PartCustTable state={data} />
                <AccountBalance balance={balance} />
                <div className='btn-partcust'>
                    <Button variant='contained' color='primary' style={{ width: 300, height: 100, fontSize: 25 }} onClick={() => handleTransferClick()} >Transfer Money</Button>
                    <Button variant='contained' color='primary' style={{ width: 300, height: 100, fontSize: 25 }} onClick={() => handleAddClick()}  >Add Money</Button>
                </div>
                <div>
                    {
                        activeT === true ? <CancelOutlinedIcon
                            onClick={() => handleCancelClick()}
                            style={{ marginLeft: '80%', width: 100, height: 50, cursor: 'pointer', color: 'purple' }}
                        />
                            : activeA === true ? <CancelOutlinedIcon
                                onClick={() => handleCancelClick()}
                                style={{ marginLeft: '80%', width: 100, height: 50, cursor: 'pointer', color: 'purple' }}
                            />
                                : false

                    }
                    {
                        activeT === true ? <TransferMoney /> : activeA === true ? <AddMoney /> : false
                    }
                </div>
            </div>

        </div>
    )
}




const mapStateToProps = (state) => ({
    customers: state.customers
})


const mapDispatchToProps = (dispatch) => ({
    send_user: () => dispatch(send_user()),
    getFbUsers: () => dispatch(getFbUsers())

})
export default connect(mapStateToProps, mapDispatchToProps)(ParticularCustomers)