
import { MessageRow, MessageContent, Message as Item } from "./Message.styled"
import { Typography } from '@mui/material';
import { MessageType } from "types/socket";

type Props = {
    direction?: string;
    message: MessageType
}

export const Message: React.FunctionComponent<Props> = ({ direction, message: { message, time } }) => {
    return (
        <MessageRow direction={direction}>
            <MessageContent direction={direction}>
                <Item direction={direction}>
                    {message}
                </Item>
                <Typography variant="body2" color="initial">
                    {time}
                </Typography>
            </MessageContent>
        </MessageRow>
    )
}