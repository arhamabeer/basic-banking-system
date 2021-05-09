import React from 'react'
import HomeBar from '../components/homeBar'
import HomeFoot from '../components/homeFoot'
import './screens.css'
import Button from '@material-ui/core/Button';

export default function Home(props) {
    return (
        <div>
            <HomeBar />
            <div className='main-div-home'>
                <div className='img-div-home'>IMAGE</div>
                <div className='welc-div-home'>
                    <div className='div-heading-home'>

                        <h2>WELCOME TO</h2>
                        <h1 style={{marginTop: 0, marginBottom: 50}}>AAA BANKING SYSTEM</h1>
                    </div>
                    <div className='div-btn-home'>

                        <Button variant="contained" style={{width: 250, height: 60}} color="primary" onClick={()=>props.history.push('/allcustomers')} href="#contained-buttons">
                            View All Customers
                        </Button>
                        <Button variant="contained" style={{width: 250}}  color="primary" href="#contained-buttons">
                            History
                        </Button>
                    </div>
                </div>
            </div>
            <HomeFoot />
        </div>
    )
}