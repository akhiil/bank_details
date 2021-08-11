export const cacheReducer = (state = [], action) => {
    if (action.type === 'ADD_BANK_DATA') {
        let temp = [];
        for (let i = 0; i < action.payload.length; i++) {
            temp = [...temp, { ...action.payload[i], favourite: false, index: i }];
            // temp[i] = {...temp[i], {favourite: false, index: i}}
        }
        //temp.push({ ...action.payload });
        return temp;
    }
    return state;
}

export const cityReducer = (state = 'MUMBAI', action) => {
    if (action.type === 'SELECT_CITY') {
        return action.payload;
    }
    return state;
}