import React from "react";
import styled from "styled-components"; 

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
`

const Slogan=styled.h3`
    margin:0;
    font-size:20px;
    color: #fff;
    font-weight: 700;
`

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
                
                <SloganContainer><Slogan></Slogan></SloganContainer>
                <StandoutImage></StandoutImage>
</ContentContainer>
        </SpecialistAdContainer>
    )
};