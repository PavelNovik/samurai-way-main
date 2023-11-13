import React, {FC} from 'react';

// import {StoreType} from "../../../redux/store";
import {addMessageAC, updateNewMessageTextAC} from "../../../redux/messagesReducer";
import Messages from "./Messages";
import StoreContext from "../../../redux/StoreContext";

type MessagesPropsType = {
    // store: StoreType
}
const MessagesContainer: FC<MessagesPropsType> = (props) => {
    // const state = store.getState().messagesPage
    //
    // const updateNewMessageText = (text: string) => {
    //     // const userInput = ref.current as HTMLTextAreaElement
    //     // updateNewMessageText(userInput.value)
    //     store.dispatch(updateNewMessageTextAC(text))
    // }
    // const addNewMessage = () => {
    //     store.dispatch(addMessageAC())
    // }

    return (<StoreContext.Consumer>{
            (store) => {
                const state = store.getState().messagesPage
                const updateNewMessageText = (text: string) => {
                    // const userInput = ref.current as HTMLTextAreaElement
                    // updateNewMessageText(userInput.value)
                    store.dispatch(updateNewMessageTextAC(text))
                }
                const addNewMessage = () => {
                    store.dispatch(addMessageAC())
                }
                return (<Messages messages={state.messages} newMessageText={state.newMessageText}
                                  updateNewMessageText={updateNewMessageText}
                                  addNewMessage={addNewMessage}/>)
            }}
        </StoreContext.Consumer>
    )
        ;
};

export default MessagesContainer;