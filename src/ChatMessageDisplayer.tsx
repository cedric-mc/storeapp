import React from "react";
import { ChatLauncher } from "./ChatLauncher";
import { ChatDisplayer } from "./ChatDisplayer";

const ChatMessageDisplayer = (props: { messages: { name: string, message: string }[], onMessageSent: (message: string) => void }) => {
    return (
        <div>
            {props.messages.map((message, index) => <div key={index}>{message.name}: {message.message}</div>)}
            <ChatDisplayer onMessageSent={props.onMessageSent} />
        </div>
    );
}