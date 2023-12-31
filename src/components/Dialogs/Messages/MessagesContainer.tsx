import {addMessageAC, MessagesType, updateNewMessageTextAC} from "../../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";



type MapStatePropsType = {
    messages: MessagesType[]
    newMessageText: string
}
type MapDispatchPropsType = {
    updateNewMessageText:(text: string)=> void
    addNewMessage:()=> void
}

export type MessagesPropsType = MapStatePropsType & MapDispatchPropsType
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText
    }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType  => {
    return {
        updateNewMessageText: (text: string) => dispatch(updateNewMessageTextAC(text)),
        addNewMessage: ()=> dispatch(addMessageAC())
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;