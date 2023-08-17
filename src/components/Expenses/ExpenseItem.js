import './ExpenseItem.css'
import ExpenseDate  from './ExpenseDate';
import Card from '../UI/Card';
import React,{useState} from 'react';
function ExpenseItem(props)
{
    const[title, updatedTitle] = useState(props.title);
    const clickHandler = ()=>{updatedTitle('Updated!');console.log(title)};
  
  return (
        <Card className='expense-item'>
           <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'><h2>{title}</h2></div>
            <div className='expense-item__price'>{props.amount}</div>
            <button onClick={clickHandler}>Change Title</button>
        </Card> 

    );
}

export default ExpenseItem;