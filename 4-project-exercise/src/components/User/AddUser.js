import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import classes from './AddUser.module.css'

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const [error, setError] = useState();

    const [displayModal, setDisplayModal] = useState(false);



    const newUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age'
            })
            setDisplayModal(true);
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age, (>0)'
            })
            setDisplayModal(true);
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

    const closeHandler = () => {
        console.log('Closehandler!!!')
        setDisplayModal(false);
    };

    return (<div>
        {displayModal ?
            <ErrorModal onClose={closeHandler} title={error.title} message={error.message}></ErrorModal>
            : ''
        }

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