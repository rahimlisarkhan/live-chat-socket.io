import { Box } from "@mui/material";
import styled from "styled-components";
import { colors } from "../../../style/colors";
// import ScrollToBottom from "react-scroll-to-bottom"

export const ChatContentStyled = styled(Box)`
    width: 375px;
    height:620px;
    position: absolute;
    padding:20px;
    box-shadow: 0 0 5px .5px white;
    border-radius:20px 20px 0 20px ;
    background:${colors.colorWhite};
`

export const ChatHeader = styled(Box)`
height:60px;
display:flex;
justify-content:space-between ;
align-items: center;
border-bottom: 1px solid #eaeaea;
`
export const ChatBody = styled(Box)`
height:450px;
padding:10px 0;
overflow-y:auto;
border-bottom: 1px solid #eaeaea;
svg{
    fill:#2f80ed;
}
&::-webkit-scrollbar {
  width: 0px;               /* width of the entire scrollbar */
}
`




export const ChatFooter = styled(Box)`
padding:10px 0;
svg{
    fill:#2f80ed;
}
`
export const ChatFooterContent = styled(Box)`
    display:flex;
align-items:center;
width:100%;
`

export const ChatInput = styled.input`
width:100%;
height:40px;
padding:15px;
font-size: 16px;
margin:5px 0;
border-radius:10px;
background: transparent;
border: 1px solid #eaeaea;
outline:none;

&:focus{
    border: 1px solid #2f80ed
}
`


