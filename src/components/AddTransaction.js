import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { v4 as uuid } from 'uuid'


export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState()

    const { addTransaction } = useContext(GlobalContext)
    console.log('addT:', addTransaction)

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: uuid(),
            text,
            amount: +amount //to convert string to a number
        }
        addTransaction(newTransaction)
        setText('')
        setAmount('')
    }
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit} >
                <div className='form-control' >
                    <label htmlFor="text" >Income/Expense Label</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter income or expense label...' />
                </div>
                <div className='form-control' >
                    <label htmlFor="amount">Amount <br /> (negative - expense, positive - income) </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount...' />
                </div>
                <button className='btn'>Add transaction</button>
            </form>
        </>
    )
}
