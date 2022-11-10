import React, {useState} from 'react';
import UserForm from "./components/User-Form/UserForm";
import Users from "./components/Users/Users";
import {User} from "./type";


function App() {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (newUser: User) => {
    setUsers(prev => [...prev, newUser]);
  };
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col">
          <UserForm onSubmit={addUser}/>
        </div>
        <div className='col'>
          <h2>Users</h2>
          <Users users={users}/>
        </div>
      </div>


    </div>
  );
}

export default App;
