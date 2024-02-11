import React from 'react';
import {ProfileType} from "../../../../../redux/profileReducer";

type Props = {
    profile: ProfileType
}
export const UserProfileInfoData = ({profile}: Props) => {
    return (
        <>
            <span>{profile.fullName || 'My full name'}</span>
            <span>{profile.aboutMe || 'Who am I'}</span>
            <span>Looking for a job: {profile.lookingForAJob ? 'Yes' : 'No'}</span>
            <span>My skills: {profile.lookingForAJobDescription}</span>
        </>
    );
};

