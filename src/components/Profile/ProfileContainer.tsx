import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfilePageType, setUserProfileTC} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from "react-router";
import {Redirect, RouteComponentProps} from "react-router-dom";

export type ProfileContainerPropsType = MapStateType & MapDispatchType
type MapDispatchType = {
    setUserProfileTC: (userId: string | number) => void
}
type MapStateType = ProfilePageType & {isAuth: boolean}

class ProfileContainer extends React.Component<CommonPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '30269'
        }
        this.props.setUserProfileTC(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <Profile profile={this.props.profile} />
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateType => ({
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    isAuth: state.auth.isAuth

})

type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

type PathParamsType = {
    userId: string
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfileTC})(WithUrlDataContainerComponent);