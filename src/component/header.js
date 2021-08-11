import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import '../css/header.css'
import Logo from './logo'

const App = (props) => {
    const [cityInput, setCityInput] = useState('')

    return (
        <div className="container">
            <div className="innerContainer">

                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Logo height={45} width={45} size={27} />
                    <p style={{ color: '#f2f2f2', fontSize: 20, fontWeight: 'bold', marginLeft: 30, fontFamily: 'cursive' }}>Find my bank</p>
                </div>


                <div>
                    <input
                        value={cityInput}
                        style={{
                            width: 200,
                            height: 25,
                            textAlign: 'center',
                            fontWeight: 'bold'
                        }}
                        onChange={(e) => {
                            if (e.target.value === '') {
                                props.city('MUMBAI');
                                setCityInput('')
                            }
                            else {
                                props.city(e.target.value.toUpperCase())
                                setCityInput(e.target.value.toUpperCase())
                            }
                        }}
                        autoComplete="new-password"
                        placeholder="Type city default:- MUMBAI" />
                </div>

            </div>

        </div>
    )
}

export default App;