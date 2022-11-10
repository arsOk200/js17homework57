import React from 'react';
import UserItem from "./UserItem";
import {User} from "../../type";

interface Props {
  users:User[];
}

const Users:React.FC<Props> = ({users}) => {
  return (
    <div  className="d-flex flex-column-reverse">

      {users.map((user) => (
        <UserItem key={user.id} user={user}/>
      ))}
    </div>
  );
};

export default Users;