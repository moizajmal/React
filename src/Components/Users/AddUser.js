import React,{useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
const AddUser =(props)=>
{
   const[entereduserName, setEntereduserName] = useState('');
   const[enteredAge, setEnteredAge] = useState('');
   const[error, seterror]= useState();
   const userNameChangeHandler =(event) =>
   {
        setEntereduserName(event.target.value);
       
   };

     const userAgeChangeHandler =(event) =>
   {
        setEnteredAge(event.target.value);
        
   };
    const addUserHandler = (event) =>
    {
            event.preventDefault();
            if(entereduserName.trim().length === 0 || enteredAge.trim().length === 0)
            {
                seterror({
                    title:'Invalid input',
                    message:'Please enter valid name'
                });
                return;
            }
            if(+enteredAge < 1) //conversion to number
            {
                seterror({
                    title:'Invalid input',
                    message:'Please enter valid age'
                });
                return;
    
            }
            props.onAddUser(entereduserName, enteredAge);
            setEntereduserName('');
            setEnteredAge('');
    };
    const errorHandler =()=>
    {
        seterror(null);
    };
return(
    <Wrapper>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>} 
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}> 
        <label htmlFor="userName">UserName</label>
        <input id='username' type='text' onChange={userNameChangeHandler} value={entereduserName}></input>
         <label htmlFor="age">Age</label>
        <input id='age' type='number' onChange={userAgeChangeHandler} value={enteredAge}></input>
        <Button type='submit'>Add User</Button>
    </form>

    </Card>
    </Wrapper>
);

};

export default AddUser;