import React, {FC} from 'react';

import {StoreType} from "../../../redux/store";
import {addMessageAC, updateNewMessageTextAC} from "../../../redux/messagesReducer";
import Messages from "./Messages";

type MessagesPropsType = {
    store: StoreType
}
const MessagesContainer: FC<MessagesPropsType> = ({store}) => {
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
                      updateNewMessageText={updateNewMessageText} addNewMessage={addNewMessage}/>
    );
};

export default MessagesContainer;