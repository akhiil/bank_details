import React from 'react';

const App = (props) => {

    const styles = {
        logoStyle: {
            display: 'flex',
            backgroundColor: '#dcd8f3',
            border: '8px solid #a89de1',
            borderRadius: 200,
            height: props.height,
            width: props.width,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
            marginBottom: 5,

        }
    }

    return (
        <div style={styles.logoStyle}>
            {/* <h1 style={{ fontSize: props.size, fontWeight: 'bold' }}>B</h1> */}
            <i style={{ color: 'rgb(37, 31, 99)' }} className="fas fa-school"></i>
        </div>
    )
}
export default App;