import React from "react";
import styled from 'styled-components'
import { PageContainer, InnerPageContainer } from "../../components/pageContainer";
import { Marginer } from "../../components/marginer";
import { NavBar } from "../../components/navbar";
import { TopSection } from "./topSection";
import { deviceSize}  from "../../components/responsive/index";
import { Services } from "./servises";
import { SpecialistAd } from "../../components/specialistAd";
import { Footer } from "../../components/footer";


const ContentContainer = styled.div`
    width:100%;
    max-width: ${deviceSize.laptop}px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1em;


 @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 5px;
  }
`
export function HomePage(props) {
    return (
        <PageContainer >
            <TopSection>
                <NavBar useTransparent/>
            </TopSection>
            <InnerPageContainer>
                <Marginer direction="vertical" margin="2em" />
                <ContentContainer>
                    <Services />
                    <Marginer direction="vertical" margin="5em" />
                    <SpecialistAd />
                    <Marginer direction="vertical" margin="5em" />
                </ContentContainer>
            </InnerPageContainer>

            <Footer />
        </PageContainer>);
};