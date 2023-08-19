import React,{useState} from "react";
import './ExpenseForm.css'
const ExpenseForm =(props) =>
{
    const[enteredTitle, setEnteredTitle] = useState('');
    const[enteredAmount, setEnteredAmount] = useState('');
    const[enteredDate, setEnteredDate] = useState('');
    const titleChangeHandler =(event) =>{
       setEnteredTitle(event.target.value);

    };
    const amountChangeHandler = (event) =>
    {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler =(event) =>
    {
        setEnteredDate(event.target.value);
    };

    const inputChangeHandler =(identifier, value) =>
    {
            if(identifier === 'title')
                setEnteredTitle(value);
            else if(identifier === 'amount')
                setEnteredAmount(value);
            else
            setEnteredDate(value);
    };

    const onSubmitHanlder =(event) =>
    {
        event.preventDefault();
        const expenseData = {

            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
       props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    return(
        <form onSubmit={onSubmitHanlder}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler }></input>
                </div>
                 <div className="new-expense__control">
                <label>Amount</label>
                {/* <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler}></input> */}
                <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}></input>
                </div>
                    <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2025-12-31" value={enteredDate} onChange={dateChangeHandler}></input>
                </div>
                <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;