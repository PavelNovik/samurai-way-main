import React, {ComponentType} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfilePageType, ProfileType, setUserProfile} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from "react-router";
import {RouteComponentProps} from "react-router-dom";

export type ProfileContainerPropsType = MapStateType & MapDispatchType
type MapDispatchType = {
    setUserProfile: (profile: ProfileType | null) => void
}
type MapStateType = ProfilePageType

class ProfileContainer extends React.Component<CommonPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        // console.log(this.props)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).then(res => {
            console.log(res.data)
            if(res.data) this.props.setUserProfile(res.data)
        }).catch(e => console.log(e))
    }

    render() {
        return (
            <Profile profile={this.props.profile} />
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateType => ({
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText

})

type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

type PathParamsType = {
    userId: string
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);