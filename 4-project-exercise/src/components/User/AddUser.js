import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css'

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');


    const newUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (+enteredAge < 1) {
            return;
        }
        console.log(enteredUsername, enteredAge);

        props.onAddUser({ username: enteredUsername, age: enteredAge, id: Math.random().toString() })

        setEnteredAge('');
        setEnteredUsername('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return (<div>
        <Card className={classes.input}>
            <form onSubmit={newUserHandler}>
                <label htmlFor='username'>Username</label>
                <input type="text" id='username' onChange={usernameChangeHandler} value={enteredUsername} />
                <label htmlFor='age'>Age (Years)</label>
                <input
                    type="number"
                    id='age'
                    onChange={ageChangeHandler}
                    value={enteredAge}
                />

                <Button type="submit">Add user</Button>
            </form>
        </Card>
    </div>);
};

export default AddUser;