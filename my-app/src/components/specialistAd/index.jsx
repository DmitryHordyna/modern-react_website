import React from "react";
import styled from "styled-components";
import { Marginer } from '../../components/marginer/index'
import { BrandLogo } from "../logo/brandLogo";
import FarmingImg from '../../images/farming.png'
import { Button } from "../button";

const SpecialistAdContainer = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    background-color: #264654;
    align-items: center;
    justify-content: center;

`;

const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

`;

const SloganContainer = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: flex-start;

`

const Slogan = styled.h3`
    margin:0;
    font-size:24px;
    color: #fff;
    font-weight: 700;
    line-height: 1.3;
`;

const StandoutImage=styled.div`
    width: 35em;
    height: 29em;

    img{
        width: 100%;
        height: 100%;
    }
`

export function SpecialistAd(props) {
    return (
        <SpecialistAdContainer>
            <ContentContainer>
                <SloganContainer>
                    <Slogan><BrandLogo logoSize={40} textSize={35} /></Slogan>
                    < Marginer direction="vertical" margin="1em" />
                    <Slogan>You're Specialist, and you </Slogan>
                    <Slogan>have an outstanding </Slogan>
                    <Slogan>Service to offer?</Slogan>
                    < Marginer direction="vertical" margin={10} />
                   <Button size={15} >Join as Specialist</Button >
                </SloganContainer>
            
                <StandoutImage> <img src={FarmingImg} alt="join us specialist"/></StandoutImage>
            </ContentContainer>
        </SpecialistAdContainer>
    );
};