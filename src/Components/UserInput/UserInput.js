import React,{useState} from 'react';
import classes from './UserInput.module.css'
 const initialUserInput ={
                'current-savings':1000,
                'yearly-contribution':1200,
                'expected-return' : 7,
                'duration':10
                };   
const UserInput = (props) =>
{

 const [userInput,setUserInput] = useState(initialUserInput);
    const submitHandler =(event) =>
    {
        event.preventDefault();
        props.onCalculate(userInput);
        console.log('submit');
    }

    const resetHandler =()=>
    {
        setUserInput(
                initialUserInput
        );
    }

    const inputChangeHandler = (input, value) =>
    {
           setUserInput((prevInput)=>{
            return {
                ...prevInput,
                [input] : value
            };

           });
    }

    return(
        <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" 
            onChange={(event)=> inputChangeHandler('current-savings', event.target.value )} 
            value={userInput['current-savings']}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" 
            onChange={(event)=> inputChangeHandler('yearly-contribution', event.target.value )}  
            value={userInput['yearly-contribution']}
            />
          </p>
        </div>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return"  
            value={userInput['expected-return']}
            onChange={(event)=> inputChangeHandler('expected-return', event.target.value )} />         
            </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" value={userInput['duration']}
            onChange={(event)=> inputChangeHandler('duration', event.target.value )} />
          </p>
        </div>
        <p className={classes.actions}>
          <button type="reset" onClick={resetHandler} className={classes.buttonAlt}>
            Reset
          </button>
          <button type="submit" className={classes.button}>
            Calculate
          </button>
        </p>
      </form>


    );
};

export default UserInput;