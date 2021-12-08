import React from "react";
import "./FriendList.css";
import PropTypes from "prop-types";

// const offActiv = (isActiv) => {
//   const endStatus = ["status"];
//   if (friend.isOnline === false) {
//     endStatus.push("status-nActiv");
//   }
//   return endStatus.join(' ');
// };

const FriendList = ({ friends }) => {
  //

  return (
    <ul className="friend-list">
      {friends.map((friend) => {
        const { avatar, name, isOnline } = friend;
        return (
          <li key={friend.id} className="FriendList-item">
            <span className={isOnline ? "status" : "statusnActiv"}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  name: PropTypes.string,
};

export default FriendList;
