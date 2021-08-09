import React from 'react';
import '../css/header.css'




const App = (props) => {
    // console.log(props.checkForCategory, "ye second page se hai")
    return (
        <div style={{ position: 'absolute', width: 196, backgroundColor: 'transparent', borderRadius: 5, padding: '3px 2px' }}>
            {props.arrayData.length ? <div>{props.arrayData.map((item) => {
                return (
                    <div
                        onClick={() => {
                            if (item === props.value) {
                                props.selectValue('')
                            } else {
                                props.selectValue(item)
                            }
                        }}
                        className="scrollSlide"
                        style={{
                            border: '1px solid gray',
                            marginTop: 2,
                            borderRadius: 5,
                            textAlign: 'center',
                            paddingBottom: 3,
                            cursor: 'pointer',
                            backgroundColor: props.value === item ? '#e6e6e6' : 'white'
                        }}>
                        <span style={{ fontSize: 12 }}>{item}</span>
                    </div>
                )
            })}</div> : <div style={{ display: 'flex', justifyContent: 'center' }}>
                {props.checkForCategory === '' ? <span style={{
                    padding: '20px 20px 20px 20px',
                    backgroundColor: 'white',
                    border: '1px solid black',
                    borderRadius: 5
                }}>👈 Please select a category type</span> :
                    <span style={{
                        padding: '20px 20px 20px 20px',
                        backgroundColor: 'white',
                        border: '1px solid black',
                        borderRadius: 5
                    }}>No data found 😔</span>}
            </div>}
        </div>
    )
}

export default App;