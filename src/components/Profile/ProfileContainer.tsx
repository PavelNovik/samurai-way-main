import React, {ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileStatusTC, ProfilePageType, setUserProfileTC, updateProfileStatusTC} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from "react-router";
import {RouteComponentProps} from "react-router-dom";
import {withRedirect} from "../../hoc/withRedirect";
import {compose} from "redux";

export type ProfileContainerPropsType = MapStateType & MapDispatchType
type MapDispatchType = {
    setUserProfileTC: (userId: string | number) => void
    getProfileStatusTC: (userId: string | number) => void
    updateProfileStatusTC: (status: string)=> void
}
type MapStateType = ProfilePageType

class ProfileContainer extends React.Component<CommonPropsType> {

    componentDidMount() {
        console.log(this.props)
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '30269'
        }
        this.props.setUserProfileTC(userId)
        this.props.getProfileStatusTC(userId)
    }

    render() {
        // if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <Profile status={this.props.status} profile={this.props.profile} updateProfileStatus={this.props.updateProfileStatusTC}/>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateType => ({
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    status: state.profilePage.status
})


type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

type PathParamsType = {
    userId: string
}

// const WithUrlDataContainerComponent = withRouter(ProfileContainer)

// export default withRedirect(connect(mapStateToProps, {setUserProfileTC})(WithUrlDataContainerComponent));

export default compose<ComponentType>(withRedirect,connect(mapStateToProps, {setUserProfileTC, getProfileStatusTC, updateProfileStatusTC}),withRouter)(ProfileContainer)