const INITIAL_STATE = {
    customers: []
}

export default function (state = INITIAL_STATE, action) {
    // console.log('app_reducer=> ', action.type)

    switch (action.type) {
        case 'SETSTATETONULL':
            return ({
                ...state,
                customers: action.payload,
            })
        case 'setAllCustomers':
            return ({
                ...state,
                customers: [...state.customers, action.payload]
            })
    }
    // console.log('app_reducer=> ', state.customers)

    return state
}