import React from 'react';

import Card from '../UI/Card';
import classes from './AddUser.module.css'

const AddUser = (props) => {

    const newUserHandler = (event) => {
        event.preventDefault();
    };

    return (<div>
        <Card className={classes.input}>
            <form onSubmit={newUserHandler}>
                <label htmlFor='username'>Username</label>
                <input type="text" id='username' />
                <label htmlFor='age'>Age (Years)</label>
                <input type="number" id='age' />

                <button type="submit">Add</button>
            </form>
        </Card>
    </div>);
};

export default AddUser;