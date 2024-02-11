import React from 'react';
import s from "../../ProfileInfo.module.css";
import {ContactItem} from "./ContactItem/ContactItem";
import {ProfileType} from "../../../../../redux/profileReducer";

type Props = {
    profile: ProfileType
}
export const UserProfileInfoContacts = (props: Props) => {
    const profile = props.profile
    return (
        <div className={s.profileUserDataContacts}>
            <span>Contacts:</span>
            {Object.keys(profile.contacts).map((el) => {
                return <ContactItem key={el} contactTitle={el}
                                    contactValue={profile.contacts[el as keyof typeof profile.contacts] || 'any Value'}/>
            })}
        </div>
    );
};

