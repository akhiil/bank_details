import React from 'react';
import { FaSchool } from 'react-icons/fa';

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
            <FaSchool color="rgb(37, 31, 99)" size={23} />
        </div>
    )
}
export default App;