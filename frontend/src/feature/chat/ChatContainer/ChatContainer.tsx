import { ChatButton } from "shared/components/ChatButton"
import { Content } from "./ChatContainer.styled"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Grow from '@mui/material/Grow';
import { useEffect, useState } from "react"
import { ChatContent } from "../ChatContent";
import { createTime } from "shared/util/createTime";
import io from "socket.io-client"
import { MessageType } from "types/socket";



const socket = io("http://localhost:3002")
console.log(socket);

export const ChatContainer = () => {
    const [openPanel, setOpenPanel] = useState(false)
    const [chats, setChat] = useState<Array<MessageType>>([])

    useEffect(() => {
        socket.on("messages", (data) => {
            console.log("socket", data);
            setChat(list => [...list, data])
        })

    }, [socket])


    console.log(chats);

    const handlePanel = () => {
        setOpenPanel(prev => !prev)
    }

    const sendMessage = async (messageData: MessageType) => {
        await socket.emit("send_message", messageData)
        setChat(list => [...list, messageData])
    }

    const signServive = (service: string) => {
        socket.emit("signin_service", service)
    }

    return (
        <Content>
            <ChatContent openPanel={openPanel} sendMessage={sendMessage} chats={chats} signServive={signServive} handlePanel={handlePanel} />
            <Grow
                in={!openPanel}
                style={{ transformOrigin: '0 0 0' }}
                {...(openPanel ? { timeout: 1000 } : {})}
            >
                <ChatButton onClick={handlePanel}>
                    <MoreHorizIcon />
                </ChatButton>
            </Grow>
        </Content >
    )
}