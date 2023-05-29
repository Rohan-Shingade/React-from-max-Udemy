import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) =>  {

  const [enteredUsename, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
    
  }
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsename.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name & age (name-empty values).'
      });
      return;
    }
    if (+enteredAge < 1) {
      // console.log('enter valid age');
      return;
    }
    // console.log(enteredUsename, enteredAge);
    props.onAddUser(enteredUsename, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  return (
    <div>
      <ErrorModal title="An error occured" message="Something went wrong!" />
      <Card className = {classes.input}>

        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>User Name</label>
          <input id="username" text="text" value={enteredUsename} onChange={usernameChangeHandler}/>

          <label htmlFor='age'>Age (years)</label>
          <input id="username" text="number" value={enteredAge} onChange={ageChangeHandler}/>

          <Button type='submit'> Add User </Button>
        </form>
        
      </Card>
    </div>
  );
};

export default AddUser;
