import { Button } from "@mui/material";
import styled from "styled-components";
import { colors } from "../../../style/colors";



export const ChatButton = styled(Button).attrs(()=>({
    variant:"contained"
}))`
    background-color: ${colors.colorWhite} !important;
    width:100px;
    height:100px;
    color: ${colors.colorBlue} !important;
    border-radius: 20px 0 20px 20px  !important;
    transition:all .2s !important;

    &:hover{
        transform: scale(.95);
    }
    `