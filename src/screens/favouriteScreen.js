import React from 'react';
import '../css/screens.css'

const App = (props) => {
    return (
        <div>
            {props.array.map((item, ind) => {
                return (

                    <div>{
                        item.favourite ? <div className="labelDataHeader">
                            <button onClick={() => props.favButton(item.index)}><i
                                style={{
                                    marginLeft: 5,
                                    marginRight: 5,
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: 18,
                                    color: '#332b88'
                                }}
                                className="fas fa-star"></i></button>
                            <span className="labelDataText"><p>{item.bank_name}</p></span>



                            <span className="labelDataText"><p>{item.ifsc}</p></span>
                            <span className="labelDataText"><p>{item.branch}</p></span>
                            <span className="labelDataText"><p>{item.bank_id}</p></span>
                            <span className="labelDataText"><p>{item.address}</p></span>
                        </div> : null
                    }</div>
                )

            })}
        </div>
    )
}

export default App;