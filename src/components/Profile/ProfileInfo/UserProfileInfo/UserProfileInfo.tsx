import React, {ChangeEvent, useState} from 'react';
import s from "../ProfileInfo.module.css";
import avatar from "../../../../assets/img/pic1.svg";
import {ProfilePropsType} from "../../Profile";
import {UserProfileInfoContacts} from "./ProfileContacts/UserProfileInfoContacts";
import {ContactFormData, ProfileContactReduxForm} from "./Forms/ProfileContactForm";
import {UserProfileInfoData} from "./ProfileData/UserProfileInfoData";
import {ProfileDataReduxForm, ProfileFormData} from "./Forms/ProfileDataForm";
import {ProfileContactsType} from "../../../../redux/profileReducer";

export const UserProfileInfo = ({profile, isOwner, ...props}: ProfilePropsType) => {

    const [editContactMode, setEditContactMode] = useState(false)

    const [editDataMode, setEditDataMode] = useState(false)
    const initialProfile: ProfileFormData = {
        fullName: profile?.fullName || '',
        aboutMe: profile?.aboutMe || '',
        lookingForAJob: profile?.lookingForAJob || false,
        lookingForAJobDescription: profile?.lookingForAJobDescription || ''
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            console.log(typeof e.target.files[0])
            props.updateProfilePhoto(e.target.files[0])
        }
    }
    const onSubmitDataHandler = (data: ProfileFormData) => {

        const updatedProfile = {
            userId: profile?.userId || '',
            contacts: profile?.contacts || {} as ProfileContactsType,
            ...data
        }
        props.updateProfile(updatedProfile, 'profile').then(()=>{
        setEditDataMode(!editDataMode)
        })
    }
    const onSubmitContactHandler = (data: ContactFormData) => {
        console.log(data)
        const updatedProfile = {
            userId: profile?.userId || '',
            fullName: profile?.fullName || '',
            aboutMe: profile?.aboutMe || '',
            lookingForAJob: profile?.lookingForAJob || false,
            lookingForAJobDescription: profile?.lookingForAJobDescription || '',
            contacts: {
                ...data
            } || {} as ProfileContactsType,
        }
        console.log(updatedProfile)
        props.updateProfile(updatedProfile, 'contacts').then(()=> {
        setEditContactMode(!editContactMode)
        })
    }

    return (
        profile ? <div className={s.profileUserData}>
            <div className={s.photoContainer}>
                <img className={s.mainPhoto} alt={'profile'}
                     src={profile.photos.large ? profile.photos.large : avatar}/>

                {isOwner && <input onChange={onMainPhotoSelected} type={"file"}/>}
            </div>

            <div className={s.profileUserDataInfo}>
                {!editDataMode && <UserProfileInfoData profile={profile}/>}
                {editDataMode && <ProfileDataReduxForm onSubmit={onSubmitDataHandler} initialValues={initialProfile}/>}
            </div>
            <div className={s.infoDataContainer}>
                {!editContactMode && <UserProfileInfoContacts profile={profile}/>}
                {editContactMode &&
                    <ProfileContactReduxForm initialValues={profile.contacts} onSubmit={onSubmitContactHandler}/>}
            </div>
            <div>
                {!editDataMode && !editContactMode && isOwner && <button onClick={() => {
                    setEditContactMode(!editContactMode)
                    setEditDataMode(!editDataMode)
                }}>Edit</button>}
            </div>
        </div> : <></>
    )
}

