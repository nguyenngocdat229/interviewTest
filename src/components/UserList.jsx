import React from "react";
import UserItem from "./UserItem";
import userlist from "./UserList.css"
const UserList = ({ users }) => {
  return (
    <div className="user__list">
      {users.map((user) => (
        <UserItem key={user.login.uuid} user={user} />
      ))}
    </div>
  );
};

export default UserList;