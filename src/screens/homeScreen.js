import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import SelectionHeader from '../component/selectionHeader'
import FavouriteScreen from './favouriteScreen'
import '../css/screens.css'
import axios from 'axios';

const App = () => {
    const [allBankData, setAllBankData] = useState([]);
    const [tenBankData, setTenBankData] = useState([]);
    const [count, setCount] = useState(10);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(count);
    const [selectedBranch, setSelectedBranch] = useState('');
    const [selectedCategoryData, setSelectedCategoryData] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('');
    const [showFavouriteScreen, setShowFavouriteScreen] = useState('');

    console.log(startIndex, endIndex, "ye wala")
    useEffect(async () => {
        await axios.get('https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI').then((res) => {
            // console.log(res.data[3600])

            let tempAll = [];
            for (let i = 0; i < res.data.length; i++) {
                tempAll = [...tempAll, { ...res.data[i], favourite: false, index: i }];
            }
            setAllBankData(tempAll)
            let temp = [];
            for (let i = startIndex; i < endIndex; i++) {
                temp.push(tempAll[i]);
            }
            setTenBankData(temp);
        }).catch((e) => {
            console.log(e);
        })
    }, [])

    const pageDataUpdate = (start, end) => {
        console.log(start, end, "fun ke andar")
        let temp = [];
        for (let i = start; i < end; i++) {
            temp.push(allBankData[i]);
        }
        setTenBankData(temp);
    }

    const filterDataFunction = (citydata, categorydata) => {

        if (!citydata && !categorydata) {
            pageDataUpdate(startIndex, endIndex);
            return;
        }

        let temp = [];
        let category;
        if (selectedCategory === 'Bank name') {
            category = 'bank_name';
        } else if (selectedCategory === 'IFSC') {
            category = 'ifsc';
        } else if (selectedCategory === 'Address') {
            category = 'address';
        }
        console.log(citydata, categorydata, category)

        if (citydata && !categorydata) {
            for (let i = 0; i < allBankData.length; i++) {
                if (allBankData[i].branch === citydata) {
                    temp.push(allBankData[i]);
                    // console.log(allBankData[i])
                }

            }
        } else if (!citydata && categorydata) {
            allBankData.map((item) => {
                if (item[category] === categorydata) temp.push(item);
            })
        } else if (citydata && categorydata) {
            allBankData.map((item) => {
                if (item[category] === categorydata && item.branch === citydata) temp.push(item);
            })
        }

        // console.log(temp)
        setTenBankData(temp);

    }

    const favouriteButton = (ind) => {
        console.log(ind)
        const temp = allBankData;
        temp[ind].favourite = !temp[ind].favourite;
        setAllBankData(temp);
        if (selectedBranch || selectedCategoryData) {
            filterDataFunction(selectedBranch, selectedCategoryData);
        } else
            pageDataUpdate(startIndex, endIndex)
    }

    // console.log(allBankData[765])
    console.log(`selected branch: ${selectedBranch}, selected category: ${selectedCategoryData}`)

    return (
        <div>
            <div style={{
                paddingTop: 64,
                paddingLeft: 5,
                paddingBottom: 50,
                display: 'flex',
                height: '100vh',
                flexDirection: 'row'
            }}>
                {/* --------------------------left side bar--------------------------- */}
                <div className="leftSideBar">
                    <button
                        style={{ backgroundColor: showFavouriteScreen ? '#c7c4ed' : '#483dc2' }}
                        onClick={() => setShowFavouriteScreen(false)} className="sidebarLinkContainer">
                        <p className="sideBarlink">Home</p>
                    </button>
                    <button
                        style={{ backgroundColor: !showFavouriteScreen ? '#c7c4ed' : '#483dc2' }}
                        onClick={() => setShowFavouriteScreen(true)} className="sidebarLinkContainer">
                        <p className="sideBarlink">Favourites</p>
                    </button>
                </div>

                {/* -----------------------right main screen------------------------------ */}
                <div className="rightMainScreen">

                    {/* -----------------selection header---------------------- */}
                    <div>
                        <SelectionHeader
                            branch={(value1, value2) => {
                                filterDataFunction(value1, value2)
                                setSelectedBranch(value1)
                                setSelectedCategoryData(value2)
                            }}
                            data={allBankData}
                            showall={() => {
                                setSelectedBranch('');
                                setSelectedCategoryData('');
                                setSelectedCategory('')
                                pageDataUpdate(startIndex, endIndex)
                            }}
                            categoryName={(value) => setSelectedCategory(value)}
                        />
                    </div>
                    {/* -------------------------------------selection hrader ends------------------------------- */}

                    <div style={{ height: '100vh-100px', paddingBottom: '100px' }}>
                        <div className="labelHeader">
                            <button style={{ backgroundColor: '#edecf9' }}><i
                                style={{
                                    marginLeft: 5,
                                    marginRight: 5,
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: 18,
                                    color: '#332b88'
                                }}
                                className="fas fa-star"></i></button>
                            <span className="labelText">Bank</span>
                            <span className="labelText">IFSC</span>
                            <span className="labelText">Branch</span>
                            <span className="labelText">Bank id</span>
                            <span className="labelText">Address</span>
                        </div>
                        {!showFavouriteScreen ? <div>
                            {tenBankData.length ? <div>{tenBankData.map((item, ind) => {
                                return (

                                    <div className="labelDataHeader">
                                        <button style={{ cursor: 'pointer', backgroundColor: '#edecf9' }} onClick={() => favouriteButton(item.index)}>{item.favourite ? <i
                                            style={{
                                                marginLeft: 5,
                                                marginRight: 5,
                                                display: 'flex',
                                                alignItems: 'center',
                                                fontSize: 18,
                                                color: '#332b88'
                                            }}
                                            className="fas fa-star"></i> : <i
                                                style={{
                                                    marginLeft: 5,
                                                    marginRight: 5,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    fontSize: 18,
                                                    color: '#332b88'
                                                }}
                                                className="far fa-star"></i>}</button>
                                        <span className="labelDataText"><p>{item.bank_name}</p></span>



                                        <span className="labelDataText"><p>{item.ifsc}</p></span>
                                        <span className="labelDataText"><p>{item.branch}</p></span>
                                        <span className="labelDataText"><p>{item.bank_id}</p></span>
                                        <span className="labelDataText"><p>{item.address}</p></span>
                                    </div>
                                )

                            })}</div> : <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 180 }}>
                                <span style={{ fontSize: 24, fontWeight: 'bold' }}>
                                    No data found...😔</span></div>}
                        </div> :
                            <FavouriteScreen favButton={(value) => favouriteButton(value)} array={allBankData} />}
                    </div>
                </div>

            </div>

            {/* --------------------------------------------Footer----------------------------------------------------- */}

            <div className="footerStyle">


                {!showFavouriteScreen ? <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 30, alignItems: 'center' }}>
                    <span style={{ color: 'white', marginRight: 10 }}>Rows per page</span>
                    <button
                        onClick={() => {
                            let temp = Math.max(0, count - 1);
                            setCount(temp)
                            setEndIndex(startIndex + temp);

                            pageDataUpdate(startIndex, startIndex + temp)

                        }}
                        style={{ backgroundColor: 'black', marginRight: 5 }}>
                        <i style={{ color: 'white' }} className="fas fa-angle-down" />
                    </button>
                    <span style={{ color: 'white' }}>{count}</span>
                    <button
                        onClick={() => {
                            let temp = Math.min(count + 1, allBankData.length);
                            setCount(temp)
                            setEndIndex(startIndex + temp);
                            pageDataUpdate(startIndex, startIndex + temp)

                        }}
                        style={{ backgroundColor: 'black', marginLeft: 5 }}>
                        <i style={{ color: 'white' }} className="fas fa-angle-up" />
                    </button>
                </div> : null}

                {!showFavouriteScreen ? <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 30, alignItems: 'center' }}>
                    <button
                        onClick={() => {
                            let tempStart = startIndex;
                            let tempEnd = endIndex;
                            if (tempEnd % count) {
                                let temp = count - (endIndex % count);
                                tempEnd += temp;
                            }

                            tempStart = Math.max(startIndex - count, 0);
                            if (tempEnd - count > tempStart) tempEnd -= count;

                            setEndIndex(tempEnd);
                            setStartIndex(tempStart);

                            pageDataUpdate(tempStart, tempEnd)
                        }}
                        style={{ backgroundColor: 'black', marginRight: 10 }}>
                        <i style={{ color: 'white' }} className="fas fa-angle-left" />
                    </button>
                    <p style={{ color: 'white', marginRight: 10 }}>({startIndex + 1} - {endIndex}) of {allBankData.length}</p>
                    <button
                        onClick={() => {
                            let tempStart = startIndex;
                            let tempEnd = endIndex;

                            tempEnd = Math.min(endIndex + count, allBankData.length);
                            if (tempStart + count < tempEnd) tempStart = tempStart + count;

                            setEndIndex(tempEnd);
                            setStartIndex(tempStart);

                            pageDataUpdate(tempStart, tempEnd)

                        }}
                        style={{ backgroundColor: 'black', marginRight: 50 }}>
                        <i style={{ color: 'white' }} className="fas fa-angle-right" />
                    </button>
                </div> : null}

            </div>
        </div>
    )
}

export default App;