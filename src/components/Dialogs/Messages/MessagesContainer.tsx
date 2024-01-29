import {addMessageAC, MessagesType} from "../../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withRedirect} from "../../../hoc/withRedirect";
import {ComponentType} from "react";


type MapStatePropsType = {
    messages: MessagesType[]
}
type MapDispatchPropsType = {
    addNewMessage: (message: string) => void
}

export type MessagesPropsType = MapStatePropsType & MapDispatchPropsType
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        messages: state.messagesPage.messages,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addNewMessage: (message: string) => dispatch(addMessageAC(message))
    }
}


// const MessagesRedirectComponent = withRedirect(Messages)
//
// const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesRedirectComponent)

// export default MessagesContainer;

export default compose<ComponentType>(connect(mapStateToProps, mapDispatchToProps),
    withRedirect)(Messages)