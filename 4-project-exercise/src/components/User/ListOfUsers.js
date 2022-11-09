import React from 'react';

import UserItem from './UserItem';

const ListOfUsers = (props) => {
    return (
        <ul>
            {props.items.map(user => {
                <UserItem
                    id={user.id}

                >

                </UserItem>
            })}
        </ul>
    );
};

export default ListOfUsers;