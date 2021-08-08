import React from 'react';
import '../css/screens.css'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const App = (props) => {
    return (
        <div>
            {props.array.map((item, ind) => {
                return (

                    <div>{
                        item.favourite ? <div className="labelDataHeader">
                            <button
                                style={{ cursor: 'pointer', backgroundColor: '#edecf9', outline: 'none' }}
                                onClick={() => props.favButton(item.index)}>
                                <AiFillStar size={23} color="#332b88" />
                            </button>
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