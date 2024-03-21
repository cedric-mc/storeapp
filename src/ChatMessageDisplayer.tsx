import React from "react";
import { ChatLauncher } from "./ChatLauncher";
import { ChatDisplayer } from "./ChatDisplayer";
import { ChatMessage } from "./ChatMessage";

const ChatMessageDisplayer = (props: { messages: { name: string, message: string }[], onMessageSent: (message: string) => void }) => {
    return (
        <div>
        </div>
    );
};

export default ChatMessageDisplayer;