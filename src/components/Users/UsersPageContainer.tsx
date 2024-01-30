import {connect} from "react-redux";
import {
    changePageTC,
    changeUserStatus,
    followUserTC, getUsersTC,
    unfollowUserTC,
    UsersStateType,
} from "../../redux/userReducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import {UsersFC} from "./UsersFC";
import {Preloader} from "../common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/user-selectors";

type MapStateType = UsersStateType
type MapDispatchType = {
    changeUserStatus: (userId: string | number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
    changePageTC: (page: number, pageSize: number) => void
    followUserTC: (userId: string | number) => void
    unfollowUserTC: (userId: string | number) => void

}

export type UsersPagePropsType = MapStateType & MapDispatchType


class UsersApi extends React.Component<UsersPagePropsType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged(page: number) {
        this.props.changePageTC(page, this.props.pageSize)
    }

    onPageChangeButton() {
        const nextPage = this.props.currentPage + 1
        this.props.changePageTC(nextPage, this.props.pageSize)
    }

    render() {
        // const users = this.props.users

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <UsersFC users={this.props.users}
                     currentPage={this.props.currentPage}
                     pageSize={this.props.pageSize}
                     followingInProgress={this.props.followingInProgress}
                     totalUsersCount={this.props.totalUsersCount}
                     onPageChanged={this.onPageChanged.bind(this)}
                     onPageChangeButton={this.onPageChangeButton.bind(this)}
                     changeUserStatus={this.props.changeUserStatus}
                     followUserTC={this.props.followUserTC}
                     unfollowUserTC={this.props.unfollowUserTC}
                // isFetching={this.props.isFetching}
            />
        </>
    }
}

// const mapStateToProps = (state: AppStateType): MapStateType => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }
const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}
export const UsersPageContainer = connect(mapStateToProps, {
    changeUserStatus,
    getUsersTC,
    changePageTC,
    followUserTC,
    unfollowUserTC
})(UsersApi)