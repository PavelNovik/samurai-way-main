import React, {ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileStatusTC,
    ProfilePageType,
    setUserProfileTC,
    updateProfilePhotoTC,
    updateProfileStatusTC
} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from "react-router";
import {RouteComponentProps} from "react-router-dom";
import {withRedirect} from "../../hoc/withRedirect";
import {compose} from "redux";

export type ProfileContainerPropsType = MapStateType & MapDispatchType
type MapDispatchType = {
    setUserProfileTC: (userId: string | number) => void
    getProfileStatusTC: (userId: string | number) => void
    updateProfileStatusTC: (status: string) => void
    updateProfilePhotoTC: (file: File)=> void
}
type MapStateType = ProfilePageType & { userId: string | null }

class ProfileContainer extends React.Component<CommonPropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.userId ? this.props.userId : ''
            // if(!userId) this.props.history.push('/users')
        }
        this.props.setUserProfileTC(userId)
        this.props.getProfileStatusTC(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<CommonPropsType>, prevState: Readonly<{}>) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        // if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <Profile isOwner={!this.props.match.params.userId} status={this.props.status} profile={this.props.profile}
                     updateProfileStatus={this.props.updateProfileStatusTC}
                     updateProfilePhoto={this.props.updateProfilePhotoTC}
            />
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateType => ({
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    status: state.profilePage.status,
    userId: state.auth.id
})


type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

type PathParamsType = {
    userId: string
}

// const WithUrlDataContainerComponent = withRouter(ProfileContainer)

// export default withRedirect(connect(mapStateToProps, {setUserProfileTC})(WithUrlDataContainerComponent));

export default compose<ComponentType>(withRedirect, connect(mapStateToProps, {
    setUserProfileTC,
    getProfileStatusTC,
    updateProfileStatusTC,
    updateProfilePhotoTC
}), withRouter)(ProfileContainer)