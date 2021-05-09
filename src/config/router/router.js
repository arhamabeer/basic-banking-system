import React from "react";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import AllCustomers from "../../screens/allCustomers";
import Home from "../../screens/home";
import ParticularCustomers from "../../screens/particularCustomer";


export default function AppRouter() {
    return (
        <Router>
            <Route exact path='/' component={Home} />
            <Route exact path='/allcustomers' component={AllCustomers} />
            <Route exact path='/particularCustomers/:account_no/:name' component={ParticularCustomers} />
        </Router>
    )
}
