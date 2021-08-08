import React, { useState, useEffect } from 'react';
import ScrollSelector from './scrollSelector';
import axios from 'axios';

const categories = ["Bank name", 'IFSC', 'Address']

const App = (props) => {
    const [cityArray, setCityArray] = useState([]);
    const [wholeCity, setWholeCity] = useState([]);
    const [showScrollCity, setShowScrollCity] = useState(false);
    const [showScrollCategories, setShowScrollCategories] = useState(false);
    const [showScrollSearchCategory, setScrollSearchCategory] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [allBankData, setAllBankData] = useState({});
    const [categoryArray, setCategoryArray] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [selectCategoryData, setSelectCategoryData] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [categoryInput, setCategoryInput] = useState('')


    useEffect(() => {
        axios.get('https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI').then((res) => {
            let temp5 = [];
            let tempSet = new Set();
            let tempAll = [];
            let tempWholeBank = [];
            for (let i = 0; i < res.data.length; i++) {
                if (i < 5) {
                    tempSet.add(res.data[i].branch)
                    // temp5[i] = res.data[i].branch;
                }
                tempAll[i] = res.data[i].branch;
                tempWholeBank[i] = res.data[i];
            }
            for (let item of tempSet) temp5.push(item);
            setCityArray(temp5);
            setWholeCity(tempAll);
            setAllBankData(tempWholeBank);
        }).catch((e) => {
            console.log(e);
        })
    }, [])

    useEffect(() => {
        topFiveCategoryWise('')
    }, [selectedCategory])

    const topFiveCities = (value) => {
        let temp = [];
        let tempSet = new Set();
        let i = 0;
        while (i < wholeCity.length && tempSet.size < 5) {
            if (wholeCity[i].substring(0, value.length) === value.toUpperCase()) {
                tempSet.add(wholeCity[i]);
            }

            i++;
        }
        // console.log(wholeCity[i].substring(0, value.length))
        for (let item of tempSet) temp.push(item);
        setCityArray(temp)
    }

    const topFiveCategoryWise = (value) => {
        let temp = [];
        let tempSet = new Set();
        let i = 0;
        // console.log(value, " ", selectedCategory)
        if (selectedCategory === 'Bank name') {
            while (i < allBankData.length && tempSet.size < 5) {
                if (allBankData[i].bank_name.substring(0, value.length) === value.toUpperCase()) {
                    tempSet.add(allBankData[i].bank_name);
                }

                i++;
            }
        } else if (selectedCategory === 'IFSC') {
            while (i < allBankData.length && tempSet.size < 5) {
                if (allBankData[i].ifsc.substring(0, value.length) === value) {
                    tempSet.add(allBankData[i].ifsc);
                }
                i++;
            }
        } else if (selectedCategory === 'Address') {
            while (i < allBankData.length && tempSet.size < 5) {
                if (allBankData[i].address.substring(0, value.length) === value.toUpperCase()) {
                    tempSet.add(allBankData[i].address);
                }
                i++;
            }
        }

        for (let item of tempSet) temp.push(item);
        setCategoryArray(temp);
    }



    // console.log(allBankData)
    // console.log(selectedCity, " ", selectCategoryData, " ", selectedCategory)
    // console.log(allBankData.length)
    console.log(selectedCategory, "ye first page se hai");

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '15px 10px 5px 10px' }}>

            <button
                onClick={() => {
                    setCityInput('');
                    setCategoryInput('');
                    setSelectedCategory('');
                    setSelectCategoryData('')
                    setScrollSearchCategory(false);
                    setShowScrollCity(false);
                    setShowScrollCategories(false)
                    props.showall()
                }}
                style={{ backgroundColor: '#1d184e', padding: '5px 15px', borderRadius: 20, outline: 'none' }}>
                <p style={{ color: 'white', fontSize: 14, fontFamily: 'cursive' }}>Reset to default</p>
            </button>

            {/* <div style={{ display: 'flex', flexDirection: 'row', width: '50%', justifyContent: 'space-around' }}> */}
            <div>
                <div style={{ width: 150, display: 'flex', marginRight: 20, borderRadius: 5 }}>
                    <input
                        onSelect={() => {
                            setSelectedCity('');
                            setShowScrollCity(true)
                        }}
                        // value={selectedCity ? selectedCity : null}
                        value={cityInput}
                        onChange={(e) => {
                            setCityInput(e.target.value);
                            topFiveCities(e.target.value);
                            if (e.target.value === '') {
                                props.branch(selectedCity, selectCategoryData)
                            }
                        }}
                        autoComplete="new-password"
                        placeholder="Search by branch"
                        style={{ fontSize: 14, padding: '5px 10px 5px 10px', borderRadius: 5 }} />
                </div>
                {showScrollCity ? <ScrollSelector
                    selectValue={(value) => {
                        setCityInput(value)
                        props.branch(value, selectCategoryData)
                        setSelectedCity(value)
                        setShowScrollCity(false);
                    }}
                    value={selectedCity}
                    arrayData={cityArray}
                /> : null}
            </div>

            <div>
                <div style={{ width: 195, height: 30, display: 'flex', justifyContent: 'space-between', backgroundColor: '#dad8f3', paddingLeft: 7, borderRadius: 5, alignItems: 'center' }}>
                    <p style={{ color: 'gray', fontSize: 14 }}>Select Category</p>
                    <button
                        onClick={() => {
                            setShowScrollCategories(!showScrollCategories)
                        }}
                        style={{ backgroundColor: '#a29de1', height: '100%', width: 30, textAlign: 'center' }}>
                        {showScrollCategories ? <i className="fas fa-angle-up"></i> : <i className="fas fa-angle-down"></i>}
                    </button>
                </div>
                {showScrollCategories ? <ScrollSelector

                    selectValue={(value) => {
                        props.categoryName(value)
                        setSelectedCategory(value)
                    }}
                    arrayData={categories}
                    value={selectedCategory}
                /> : null}
            </div>
            <div style={{ borderRadius: 5, height: 26 }}>
                <input
                    onSelect={() => {
                        setSelectCategoryData('');
                        setScrollSearchCategory(true)
                    }}
                    // value={selectCategoryData ? selectCategoryData : null}
                    value={categoryInput}
                    onChange={(e) => {
                        setCategoryInput(e.target.value);
                        topFiveCategoryWise(e.target.value);
                        if (e.target.value === '') {
                            props.branch(selectedCity, selectCategoryData)
                        }
                    }}
                    autoComplete="new-password"
                    placeholder="search by category"
                    style={{ fontSize: 14, padding: '5px 10px 5px 10px', borderRadius: 5 }}
                />
                {showScrollSearchCategory ? <ScrollSelector
                    arrayData={categoryArray}
                    selectValue={(value) => {
                        setCategoryInput(value);
                        props.branch(selectedCity, value)
                        setSelectCategoryData(value)
                        setScrollSearchCategory(false);
                        setShowScrollCategories(false)
                    }}
                    value={selectedCity}
                    checkForCategory={selectedCategory}
                /> : null}
            </div>
            {/* </div> */}

        </div>
    )
}

export default App;