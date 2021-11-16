import React from 'react';
import { Footer } from '../../components/footer';
import { NavBar } from '../../components/navbar';
import {
  InnerPageContainer,
  PageContainer,
} from '../../components/pageContainer';
import {AccountBox} from '../../components/accountBox'

export function CustomerAccesPage(props) {
  return (
    <>
      <NavBar />
      <PageContainer>
        <InnerPageContainer><AccountBox/></InnerPageContainer>
        <Footer />
      </PageContainer></>
  );
}
