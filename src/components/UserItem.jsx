import React from "react";
import useritem from "./UserItem.css"
const UserItem = ({ user }) => {
    const title = `${user.name.title}`
  const fullName = `${user.name.first} ${user.name.last}`;
  const thumbnail = user.picture.large;

  return (
    <div>
      <img className="thumbnail" src={thumbnail} alt={fullName} />
      <div>{title}</div>
      <div className="title">{fullName}</div>
      <div>{user.login.username}</div>
    </div>
  );
};

export default UserItem;