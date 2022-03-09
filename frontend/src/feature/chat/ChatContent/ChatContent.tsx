import { ChatHeader, ChatContentStyled, ChatBody, ChatFooter, ChatInput, ChatFooterContent } from "./ChatContent.styled"
import { Collapse, Grow, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { UserAvatar } from "../../../shared/components/Avatar"
import { Message } from "../Message";
import SendIcon from '@mui/icons-material/Send';
import { Fragment, useState } from "react";
import { MessageType } from "types/socket";
import { createTime } from "shared/util/createTime";
import { v1 as uuidv1 } from 'uuid';
import { TransitionGroup } from 'react-transition-group';
type Props = {
    openPanel: boolean;
    chats: MessageType[];
    handlePanel: () => void
    sendMessage: (messageData: MessageType) => void
    signServive: (message: string) => void
}


export const ChatContent: React.FunctionComponent<Props> = ({ openPanel, handlePanel, chats, sendMessage, signServive }) => {

    const [messageText, setMessageText] = useState("")
    const [userName, setUserName] = useState("")
    const [serviceName, setServiceName] = useState("")
    const [signin, setSignIn] = useState(false)

    const handleSignIn = () => {
        if (!userName.trim() || !serviceName.trim()) {
            return
        }

        setSignIn(true)
        signServive(serviceName)
    }


    const handleMessage = () => {
        if (messageText.length > 50) {
            return
        }

        sendMessage({
            id: uuidv1(),
            user: userName,
            time: createTime(),
            service: serviceName,
            message: messageText
        })
        setMessageText("")
    }

    return (
        <Grow
            in={openPanel}
            style={{ transformOrigin: '0 0 0' }}
            {...(openPanel ? { timeout: 1000 } : {})}
        >
            <ChatContentStyled>
                <ChatHeader>
                    <UserAvatar />
                    <Typography variant="h6" color="dark">
                        Support Team
                    </Typography>
                    <IconButton onClick={handlePanel}>
                        <CloseIcon />
                    </IconButton>
                </ChatHeader>

                {signin
                    ? <Fragment>
                        <ChatBody>
                            <TransitionGroup>
                                {chats.map(message => {
                                    return (
                                        <Collapse key={message.id}>
                                            <Message
                                                direction={message.user === userName ? "right" : ""}
                                                message={message} />
                                        </Collapse>
                                    )
                                })}
                            </TransitionGroup>
                        </ChatBody>
                        <ChatFooter>
                            <ChatFooterContent >
                                <ChatInput value={messageText} name="message" onChange={({ target: { value } }) => setMessageText(value)} />
                                <IconButton onClick={handleMessage} onKeyPress={(e) => e.key === "Enter" && handleMessage()}>
                                    <SendIcon />
                                </IconButton>
                            </ChatFooterContent>
                            <Typography variant="body2" color={messageText.length > 50 ? "error" : "dark"}>{messageText.length}/50</Typography>
                        </ChatFooter>
                    </Fragment>
                    :
                    <ChatBody>
                        <ChatInput value={userName} placeholder="full name" name="userName" onChange={({ target: { value } }) => setUserName(value)} />
                        <ChatInput value={serviceName} placeholder="service" name="userName" onChange={({ target: { value } }) => setServiceName(value)} />
                        <IconButton onClick={handleSignIn} >
                            <SendIcon />
                        </IconButton>
                    </ChatBody>
                }

            </ChatContentStyled>
        </Grow>
    )
}