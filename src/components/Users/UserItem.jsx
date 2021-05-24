import React from 'react';
import { NavLink } from "react-router-dom";
import { ButtonUI } from "../common/UI-components/UIElems";
import UserAvatar from "../common/UserAvatar/UserAvatar";

const UserItem = ({ user, followingInProgress, follow, unfollow }) => {
  const followUnfollowButton = user.followed ? (
    <ButtonUI
      styled={{ width: "8rem" }}
      className="p-shadow-3"
      disabled={followingInProgress.has(user.id)}
      onClick={() => unfollow(user.id)}
    >
      Unfollow
    </ButtonUI>
  ) : (
    <ButtonUI
      styled={{ width: "8rem" }}
      className="p-shadow-3"
      disabled={followingInProgress.has(user.id)}
      onClick={() => follow(user.id)}
    >
      Follow
    </ButtonUI>
  );

  return (
    <div className="users-item__item">
      <div className="p-d-inline-flex users-item__user-info">
        <div className="users-item__avatar">
          <NavLink to={`/profile/${user.id}`}>
            <UserAvatar imageUrl={user.photos.small} />
          </NavLink>
        </div>
        <NavLink to={`/profile/${user.id}`}>
          <span className="users-item__name">{user.name}</span>
          <div className="users-item__status">{user.status}</div>
        </NavLink>
      </div>
      <div className="users-item__control">{followUnfollowButton}</div>
    </div>
  );
};

export default UserItem;
