import React from 'react';
import {User} from "../../type";

interface Props {
  user:User;
}



const UserItem:React.FC<Props> = ({user}) => {

  let booleanCheck:string = 'no';

  if(user.isActive) {
    booleanCheck = 'Yes';
  }


  return (
    <div className="card border-dark mb-3" style={{maxWidth:'40rem'}}>
      <div className="card-header">Role : {user.role}</div>
      <div className="card-body text-dark">
        <h5 className="card-title">Name: {user.name}</h5>
        <p className="card-text">Email: {user.email}</p>
        <p className="card-text">Active: {booleanCheck}</p>
      </div>
    </div>
  );
};

export default UserItem;