import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
const NewExpense =(props) =>
{
 const[isEditing, setIsEditing] = useState(false);   
const saveExpenseDataHandler =(enteredExpenseData) =>
{
    const expenseData ={
        ...enteredExpenseData,
        id: Math.random().toString()
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
};

const EditingHandler = () =>

{
    setIsEditing(true);
}

const CancelEditingHandler =()=>{
    setIsEditing(false);
}
return(
    <div className="new-expense">
        {!isEditing && <button onClick={EditingHandler}>Add new expense</button>}
      {isEditing &&  <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={CancelEditingHandler}></ExpenseForm>}
    </div>
);
}

export default NewExpense;