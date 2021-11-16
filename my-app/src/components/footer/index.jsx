import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../logo/brandLogo";
import { deviceSize } from "../responsive";

import {faFacebook,faTwitch} from '@fortawesome/free-brands-svg-icons'

const FooterContainer = styled.div`
    width: 100%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2em 3em;
    padding-bottom: 0;
   border-top: 1px solid rgba(0,0,0,0.5);

    @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 2em 12px;
  }
`;

const TopContainer = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 1em;

`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &:not(:last-of-type){
        margin-right: 3%;
    }
`;

const BottonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height:70px;
    border-top: 1px solid rgba(0,0,0,0.5);
    padding: 0 10px;
    align-items: center;

      @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 0;
  }
`;

const RightBottonContainer = styled.div`
    display: flex;
    align-items: center;
`;
const LeftBottonContainer = styled.div`
    display: flex;
`;

const Title = styled.h2`
    margin:0;
    margin-bottom: 13px;
    color: black;
    font-weight: 600;
    font-size: 20px;
`;
const FLink = styled.a`
    text-decoration:none ;
    color: #6f6f6f;
    font-weight: 500;
    font-size: 15px;
    cursor: pointer;

    &:not(:last-of-type){
        margin-bottom: 8px;
    }
    &:hover{
         color: #3f3f3f;
    }
`;

const PrivacityText=styled.div`
    color: #afafaf;
    font-size: 11px;
    margin:0;
    margin-left: 10px;
    display: flex;
    margin-top: 5px;
    align-items: center;
`

const SocialIcon=styled.div`
    color: #8a8a8a;
    font-size: 22px;
    cursor: pointer;
    transition: color,200ms ease-in-out;

    &:not(:last-of-type){
        margin-right: 8px;
    }
    &:hover{
      color: #3f3f3f;
    }
`

export function Footer(props) {
    return (
        <FooterContainer>
            <TopContainer>
                <ContentContainer>
                    <Title>Categories</Title>
                    <FLink>Carpentry</FLink>
                    <FLink>Landscaping</FLink>
                    <FLink>Cleaning</FLink>
                    <FLink>Home Impovement</FLink>
                    <FLink>Demolition</FLink>
                    <FLink>Managment</FLink>
                    <FLink>Other</FLink>
                  
                </ContentContainer >
                <ContentContainer>
                    <Title>Access</Title>
                    <FLink>Login</FLink>
                    <FLink>Join Us</FLink>
                    <FLink>Login as Specialist</FLink>
                    <FLink>Become as Specialist</FLink>
                </ContentContainer >
            </TopContainer >
            <BottonContainer>
                <RightBottonContainer>
                    <BrandLogo textSize={25} color="#8a8a8a" hideLogo />
                    <PrivacityText> &#169; All Right Reserved. 2021</PrivacityText>
                </RightBottonContainer>
                <LeftBottonContainer>
                    <SocialIcon>
                        <FontAwesomeIcon icon={faFacebook} />
                    </SocialIcon>
                    <SocialIcon>
                        <FontAwesomeIcon icon={faTwitch} />
                    </SocialIcon>
       
                </LeftBottonContainer>
            </BottonContainer>
        </FooterContainer>
    );
}