import React from "react";
import { NavBar } from "../../navbar";
import { PageContainer } from "../../pageContainer";
import { TopSection } from "./topSection";

export function HomePage(props) {
    return (
        <PageContainer>
            <TopSection>
                <NavBar/>
            </TopSection>
        </PageContainer>)
}