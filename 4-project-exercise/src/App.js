import React, { useState } from 'react';

import AddUser from './components/User/AddUser';
import ListOfUsers from './components/User/ListOfUsers'

function App() {

  const [users, setUsers] = useState([]);

  const addUserHandler = (enteredUser) => {
    setUsers(prevList => {
      const updatedList = [...prevList];
      updatedList.unshift(enteredUser);
      return updatedList;
    });
  };


  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <ListOfUsers items={users} />
    </div>
  );
}

export default App;
