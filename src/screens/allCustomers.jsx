import React, { useEffect } from 'react'
import DataTable from '../components/allCustTable'
import { connect } from 'react-redux'
import { send_user, getFbUsers } from '../store/action'
import ViewAllCustBar from '../components/viewAllCustHeader'


function AllCustomers(props) {

    var users = ''
    users = props.customers
    useEffect(() => {
        const getUsers = async () => {
            await props.getFbUsers();
        }
        getUsers();
    }, []);


    const keys = Object.keys(users)
    var allUsers = keys.map(item => {
        return { id: item, ...users[item] }
    })

    const handleRowClick = (e) => {
        // console.log('handling >>,', e)
        props.history.push(`/particularCustomers/${e.account_no}/${e.name}`, e)
    }

    return (
        <div>
            <div>
                <ViewAllCustBar heading='VIEW ALL CUSTOMERS' btn='History' />
            </div>
            {/* <button onClick={props.send_user}>send</button> */}
            <DataTable allUsers={allUsers} totalLength={users.length} handleClick={(e)=>handleRowClick(e)} />
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
export default connect(mapStateToProps, mapDispatchToProps)(AllCustomers)