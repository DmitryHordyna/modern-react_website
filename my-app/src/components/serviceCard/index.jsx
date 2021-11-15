import React from "react";
import styled from "styled-components";
import { Marginer } from '../marginer/index'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 300px;
    min-height: 250px;
    background-color: #fff;
    box-shadow: 0 0 3px rgba(0,0,0,0.27);
    margin: 0,5em;
    margin-bottom: 1.3em;

`

const TopContainer = styled.div`
    width: 100%;
`;

const ServiceThumbnail = styled.div`
    width: 100%;
    height: 11em;

    img{
        width: 100%;
        height: 100%;
    }
`
const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
    padding: 15 14px;
    justify-content: space-between;
`

const BottomContainer = styled.div`
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(15,15,15,0.19);
    padding: 0 10px;
`
const Title = styled.h2`
    font-size: 24px;
    margin:0;
    font-weight: 500;
    color: #000;
`

const SpecialistName = styled.h4`
    margin:0;
    color: rgba(151,151,151,1);
    font-size: 12px;
    font-weight: 400;
`;

const RatingContainer = styled.div`
    display: flex;
    color:#EBE204;
`;
const PriceContainer = styled.div`
display: flex;
`;

const PriceText = styled.h6`
    margin:0;
    color: #2A9D8E;
    font-weight: 500;
`

const StartingArTex = styled.h5`
    margin:0;
    color: rgba(161,161,161,0.9);
    font-weight: 400;

`
export function ServicedCard(props) {

    const { thumbnailUrl, specialist, id, title, rate, rating } = props;

    return (
        <CardContainer>
            <TopContainer>
                < ServiceThumbnail>
                    <img src={thumbnailUrl } alt="title" />
                </ ServiceThumbnail>
            </TopContainer>

            <ContentContainer>
          
                <Title>{title}</Title>
                <Marginer direction="vertical" margin={10} />
                <SpecialistName>{specialist.fullName}</SpecialistName>
                <BottomContainer>
                    <RatingContainer>
                        <FontAwesomeIcon icon="faStar" size="sm" />{rating}
                    </RatingContainer>
                    <PriceContainer>
                        <StartingArTex>STARRING AT</StartingArTex>
                        <PriceText>${rating}/hr</PriceText>
                    </PriceContainer>
                
                </BottomContainer>
            </ContentContainer >

        </CardContainer>);
    
}