import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


const initialState = {
    transactions: [
        { id: 1, text: 'Book', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Coffee', amount: -10 },
        { id: 4, text: 'Phone', amount: 150 },
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (<GlobalContext.Provider value={{
        transactions: state.transactions
    }} >
        {children}
    </GlobalContext.Provider>);
}