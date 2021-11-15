import React from 'react'
import styled from 'styled-components'
import { BrandLogo } from '../../components/logo/brandLogo';
import { Marginer } from '../../components/marginer/index'
import { Button } from '../../components/button';

import TopSectionBacgroundImg from '../../images/landing-page.jpg';
import TheBestSpecialistImg from '../../images/Work.png'



const TopSectionContainer = styled.div`
    width:100%;
    height:800px;
    background:url(${TopSectionBacgroundImg});
    background-position:0px -100px;
    background-size:cover;
`;

const BackgroundFilter = styled.div`
    width:100%;
    height:100%;
    background-color:rgba(38,70,83,0.9);
    display:flex;
    flex-direction:column;
`

const TopSectionInnerContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
`

const StandoutImg = styled.div`
    width:44em;
    height:34em;

    img {
        width:100%;
        height:100%;
    }
`;

const LogoContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
`
const SloganText = styled.h3`
    margin:0;
    line-height:1.4;
    color:#fff;
    font-weight:500;
    font-size:35px;
`


export function TopSection(props) {
    const { children } = props;

    return (

    <TopSectionContainer>
            <BackgroundFilter>
                {children}
            <TopSectionInnerContainer>
                <LogoContainer>
                        <BrandLogo logoSize={65} textSize={55} />
                        <Marginer direction="vertical" margin={10}/>
                        <SloganText>Find the right specialist</SloganText>
                        <SloganText>For the job</SloganText>
                        <Marginer direction="vertical" margin={10} />
                        <Button>  Join Now </Button>
                </LogoContainer>
                <StandoutImg>
                    <img src={TheBestSpecialistImg} alt="the best worker"/>
                </StandoutImg>
           </TopSectionInnerContainer >
        </BackgroundFilter >
    </TopSectionContainer>)
}