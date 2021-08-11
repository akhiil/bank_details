import React from 'react';
import { Link } from 'react-router-dom'
import '../css/header.css'
import Logo from './logo'

const App = (props) => {
    return (
        <div className="container">
            <div className="innerContainer">

                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Logo height={45} width={45} size={27} />
                    <p style={{ color: '#f2f2f2', fontSize: 20, fontWeight: 'bold', marginLeft: 30, fontFamily: 'cursive' }}>Find my bank</p>
                </div>


                <div>
                    <input
                        style={{
                            width: 200,
                            height: 25,
                            textAlign: 'center'
                        }}
                        onChange={(e) => {
                            if (e.target.value === '') props.city('MUMBAI');
                            else
                                props.city(e.target.value.toUpperCase())
                        }}
                        placeholder="Enter your city" />
                </div>

            </div>

        </div>
    )
}

export default App;