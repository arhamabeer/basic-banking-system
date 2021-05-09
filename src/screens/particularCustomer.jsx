import React, { useEffect } from 'react'
import DataTable from '../components/allCustTable'
import { connect } from 'react-redux'
import { send_user, getFbUsers } from '../store/action'
import ViewAllCustBar from '../components/viewAllCustHeader'
import AccountBalance from '../components/accountBalance'
import Button from '@material-ui/core/Button';
import PartCustTable from '../components/partCustTable'
import AddMoney from '../components/addMoney'
import TransferMoney from '../components/transferMoney'


function ParticularCustomers(props) {

    const balance = props.location.state.balance
    const c_name = props.location.state.name
    const data = [];
    data.push(props.location.state)
    
    // console.log('props>>,', props.location.state)

    return (
        <div>
            <div>
                <ViewAllCustBar heading={c_name} btn='History' />
                <PartCustTable state={data} />
                <AccountBalance balance={balance} />
                <div className='btn-partcust'>
                    <Button variant='contained' color='primary' style={{ width: 300, height: 100, fontSize: 25 }} >Transfer Money</Button>
                    <Button variant='contained' color='primary' style={{ width: 300, height: 100, fontSize: 25 }}  >Add Money</Button>
                </div>
                <div>
                    {/* <TransferMoney /> */}
                    <AddMoney />
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