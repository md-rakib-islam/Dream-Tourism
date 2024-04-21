import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentCurrency :  { id: 13, name: "Great Britain Pound", currency: "GBP", symbol: "£" },
    exchangeRates : {},
};

export const currencySlice = createSlice({
    name : 'currency',
    initialState,
    reducers : {
        addCurrency : (state, action) => {
            state.currentCurrency = action.payload
        },
        addExchangeRates : (state, action) => {
            state.exchangeRates = action.payload
        }
    }
});

export const {addCurrency, addExchangeRates} = currencySlice.actions;
export default currencySlice.reducer;