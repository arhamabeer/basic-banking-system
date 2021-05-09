import Firebase from '../../config/firebase'
import firebase from 'firebase'


const send_user = () => {
    return (dispatch) => {
        var key = firebase.database().ref('/').child('users/').push().key
        const data = {
            name: 'Sheikh Khan',
            account_no: '11119876010',
            email: 'sheikh@gmail.com',
            phone_no: '03003698521',
            address: 'street 4,house 35 Karachi',
            balance: 120030,
            key: key
        }

        // console.log('key>>' ,data.balance.toLocaleString())
        firebase.database().ref('/users').child(`/${key}`).set(data)
    }

}

const getFbUsers = () => {
    return (dispatch) => {
        let user = []
        dispatch({
            type: 'SETSTATETONULL',
            payload: user
        })
        firebase.database().ref('/').child('users/').on('child_added', (data) => {
            dispatch({
                type: 'setAllCustomers',
                payload: data.val()
            })
        })
    }
}

export {
    send_user,
    getFbUsers,
}