import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
    border:none;
    outline:none;
    color:#fff;
    padding:6px 1em;
    font-size:${({size})=>size?size+"px":"18px"};
    font-weight:600;
    border-radius:3px;
    background-color:#2A9D8F;
    transition:all 200ms ease-in-out;
    cursor:pointer;
    
    &:hover{
    background-color:#248b7f;
    }
    &:focus{
        outline:none;
    }
`;

export function Button(props) {
    const {size}=props
    return <ButtonWrapper size={size}>{props.children }</ButtonWrapper>
}