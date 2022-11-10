import React, {useState} from 'react';
import {User, UserMutation} from "../../type";


interface Props {
  onSubmit:(user:User) => void;
}


const UserForm:React.FC<Props> = ({onSubmit}) => {
  const [user, setUser] = useState<UserMutation>({
    name:'',
    email:'',
    isActive:false,
    role:'',
  });

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id:Math.random().toString(),
      ...user,
    })
    console.log(user);
  };

  const onUserChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setUser(prev => ({...prev, [name]: value}));
  };
  const onUserCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, checked} = e.target;
    setUser(prev => ({...prev, [name]: checked}));
  };
  return (
    <form onSubmit={onFormSubmit} >
      <h2>Add new user</h2>
      <div className="form-group mb-3">
        <label htmlFor="name">Your name</label>
        <input required id='name' name='name' type="text" className="form-control" value={user.name} onChange={onUserChange}/>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="email">Your email</label>
        <input required id='email' name='email' type="email" className="form-control" value={user.email} onChange={onUserChange}/>
      </div>
      <div className="form-group mb-3">
        <label className='me-1' >Active</label>
        <input id='checkbox' name='isActive' type="checkbox"  checked={user.isActive} onChange={onUserCheckboxChange}/>
      </div>
      <div className="form-group mb-3">
        <label>Your role: </label>
        <select required name="role" value={user.role} onChange={onUserChange}>
          <option disabled value=''>Select a role: </option>
          <option>User</option>
          <option>Editor</option>
          <option>Admin</option>
        </select>
      </div>
      <button type='submit' className='btn btn-dark'>Add</button>
    </form>
  );
};

export default UserForm;