import React from "react";
import avatarPlaceholder from "../../assets/images/User_avatar_placeholder.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { PanelUI } from "../common/UI-components/UIElems";

const Contacts = React.memo(({ contacts }) => {
  const contactsJSX = Object.entries(contacts)
    // .filter(([key, value]) => value)
    .filter(([, value]) => value)
    .map(([key, value]) => (
      <div key={key}>
        <a target="_blank" rel="noreferrer" href={`//${value}`}>
          {key}
        </a>
      </div>
    ));

  const body = (
    <div>
      {contactsJSX.length ? (
        contactsJSX
      ) : (
        <span>user doesn&apos;t left any contacts yet</span>
      )}
    </div>
  );
  return <PanelUI title="Contacts" body={body} />;
});

const ProfileInfo = React.memo(
  ({ profileInfo, status}) => {
    console.log(profileInfo)
    if (!profileInfo) return null;

    return (
      <div className="profile-info__wrapper">
        <div className="profile-info__photo-container">
          <img
            alt='avatar'
            className="profile-info__photo"
            src={profileInfo.photos.large || avatarPlaceholder}
          />
          <Contacts contacts={profileInfo.contacts} />
        </div>
        <div className="profile-info__info-container">
          <div className="profile-info__user-name">{profileInfo.fullName}</div>
          <ProfileStatusWithHooks
            profileId={profileInfo.userId}
            status={status}
          />
          <div>
            <div className="profile-info__about">{profileInfo.aboutMe}</div>
            <div className="profile-info__job-status">
              {profileInfo.lookingForAJob ? (
                <span>
                  Looking for a job:{profileInfo.lookingForAJobDescription}
                </span>
              ) : (
                <span>Not looking for a job</span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default ProfileInfo;
