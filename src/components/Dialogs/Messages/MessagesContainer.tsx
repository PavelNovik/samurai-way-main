import {addMessageAC, MessagesType, updateNewMessageTextAC} from "../../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {withRedirect} from "../../../hoc/withRedirect";


type MapStatePropsType = {
    messages: MessagesType[]
    newMessageText: string
    isAuth: boolean
}
type MapDispatchPropsType = {
    updateNewMessageText: (text: string) => void
    addNewMessage: () => void
}

export type MessagesPropsType = MapStatePropsType & MapDispatchPropsType
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewMessageText: (text: string) => dispatch(updateNewMessageTextAC(text)),
        addNewMessage: () => dispatch(addMessageAC())
    }
}
const MessagesRedirectComponent = withRedirect(Messages)

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesRedirectComponent)


export default MessagesContainer;