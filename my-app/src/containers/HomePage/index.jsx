import React from "react";
import styled from 'styled-components'
import { PageContainer, InnerPageContainer } from "../../components/pageContainer";
import { Marginer } from "../../components/marginer";
import { NavBar } from "../../components/navbar";
import { TopSection } from "./topSection";
import { diviceSize}  from "../../components/responsive/index";
import { Services } from "./servises";


const ContentContainer = styled.div`
    width:100%;
    max-width: ${diviceSize.laptop}px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1em;


 @media screen and (max-width: ${diviceSize.mobile}px) {
    padding: 5px;
  }
`
export function HomePage(props) {
    return (
        <PageContainer>
            <TopSection>
                <NavBar />
            </TopSection>
            <InnerPageContainer>
                <Marginer direction="vertical" margin="2em" />
                <ContentContainer>
                    <Services />
                </ContentContainer>
            </InnerPageContainer>
        </PageContainer>);
};