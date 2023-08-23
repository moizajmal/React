import ExpenseItem  from "./ExpenseItem"
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import React, { useState } from 'react';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props)
{
    const [filteredYear, setFilteredYear] = useState('2020');
     const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(expense =>
    {
      return expense.date.getFullYear().toString() === filteredYear;
    });

 
    return(
        <Card className="expenses"> 
            <ExpensesFilter  selected={filteredYear}  onChangeFilter={filterChangeHandler}></ExpensesFilter>
            <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
            <ExpensesList items={filteredExpenses}></ExpensesList>
            </Card>
        
    );
}

export default Expenses;