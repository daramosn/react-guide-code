import React from 'react';

import Card from '../UI/Card'

import classes from './ListOfUsers.module.css';

const ListOfUsers = (props) => {
    return (
        <Card className={classes.list}>
            <ul>
                {props.items.map(user => (
                    <li key={user.id}>
                        {`${user.username} - ${user.age} years`}
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default ListOfUsers;