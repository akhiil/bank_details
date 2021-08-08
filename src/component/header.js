import React from 'react';
import { Link } from 'react-router-dom'
import '../css/header.css'
import Logo from './logo'

const App = () => {
    return (
        <div className="container">
            <div className="innerContainer">
                <span style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div style={{ display: 'block' }}>
                        <Logo height={45} width={45} size={27} />
                    </div>
                    <p style={{ color: '#f2f2f2', fontSize: 20, fontWeight: 'bold', marginLeft: 30, fontFamily: 'cursive' }}>Find my bank</p>
                </span>
                <span><Link to="/bank_details">bank detail</Link></span>
            </div>
        </div>
    )
}

export default App;