import React from "react";
import { NavBar } from "../../navbar";
import { PageContainer,InnerPageContainer } from "../../pageContainer";
import { TopSection } from "./topSection";
import styled from 'styled-components'
import { diviceSize } from "../../responsive";
import { ServicedCard } from "../../serviceCard";


const Title = styled.h1`
    font-weight:900;
    color: #000;
`;

const ContentContainer = styled.div`
    width:100%;
    max-width: ${diviceSize.laptop}px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

`
const service= [{ "id": 1, "title": "I will landscape your garden", 
    "thumbnailUrl": "http://localhost:9000/garden.jpg", "rate": 34,
    "rating": 4, "specialist": { "id": 1, "fullName": "Mark brone" }}]


export function HomePage(props) {
    return (
        <PageContainer>
            <TopSection>
                <NavBar />
            </TopSection>
            <InnerPageContainer>
                <ContentContainer>
                    <Title>Most used sevices & More</Title>
                    <ServicedCard {...service}/>
                </ContentContainer>
            </InnerPageContainer>
        </PageContainer>);
};