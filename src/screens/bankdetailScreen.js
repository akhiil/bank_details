import React, { useState, useEffect } from 'react';
import { FaSchool } from 'react-icons/fa';

const App = (props) => {
    const [bankDetail, setBankDetail] = useState({});

    useEffect(() => {
        setBankDetail(props.location.state.state.detail)
    })
    // console.log(bankDetail)

    const styles = {
        eachRow: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#edecf9',
            justifyContent: 'space-around',
            padding: '5px 10px',
            marginTop: 20,

        }
    }

    return (
        <div className="everyScreenContainer">
            <div style={{ width: '100%', height: '100%' }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    padding: '20px 10px',
                    alignItems: 'center',
                    height: '70%'
                }}>
                    <div style={{ backgroundColor: '#dcd8f3', padding: 20, borderRadius: 10, margin: '20px 10px', }}>
                        <FaSchool color="rgb(37, 31, 99)" size={'100%'} />
                    </div>

                    <div style={{ marginTop: 20, backgroundColor: '#dcd8f3', padding: '10px 10px', borderRadius: 10 }}>
                        <h2 style={{ fontWeight: 'bold', fontSize: 30, color: 'rgb(37, 31, 99)' }}>{bankDetail.bank_name}</h2>

                        <div style={styles.eachRow}>
                            <h2 style={{ width: '50%', height: '100%' }}>IFSC :</h2>
                            <p style={{ width: '50%', height: '100%' }}>{bankDetail.ifsc}</p>
                        </div>

                        <div style={styles.eachRow}>
                            <h2 style={{ width: '50%', height: '100%' }}>Branch :</h2>
                            <p style={{ width: '50%', height: '100%' }}>{bankDetail.branch}</p>
                        </div>

                        <div style={styles.eachRow}>
                            <h2 style={{ width: '50%', height: '100%' }}>District :</h2>
                            <p style={{ width: '50%', height: '100%' }}>{bankDetail.district}</p>
                        </div>

                        <div style={styles.eachRow}>
                            <h2 style={{ width: '50%', height: '100%' }}>City :</h2>
                            <p style={{ width: '50%', height: '100%' }}>{bankDetail.city}</p>
                        </div>

                        <div style={styles.eachRow}>
                            <h2 style={{ width: '50%', height: '100%' }}>Address :</h2>
                            <p style={{ width: '50%', height: '100%' }}>{bankDetail.address}</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default App;