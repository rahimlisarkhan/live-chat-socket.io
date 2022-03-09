import { Box } from "@mui/material";
import styled from "styled-components";


export const MessageRow: any = styled(Box)`
display:flex;
margin-bottom:20px;
flex-direction:${({ direction }: any) => direction === "right" && "row-reverse"}  
`
export const MessageContent: any = styled(Box)`
width:70%;
display:flex;
flex-direction:column;
align-items:${({ direction }: any) => direction === "right" && "flex-end"};
`
export const Message: any = styled(Box)`
padding:20px;
width:100%;
background:${({ direction }: any) => direction === "right" ? "#caf3fc" : "#e2e2e2"};  
border-radius:${({ direction }: any) => direction === "right" ? " 20px 20px 0 20px" : " 20px 20px 20px 0"}  
`



