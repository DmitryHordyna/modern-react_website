import React from 'react';
import styled from 'styled-components';

import { Footer } from '../../components/footer';
import { NavBar } from '../../components/navbar';
import {
  InnerPageContainer,
  PageContainer,
} from '../../components/pageContainer';
import { AccountBox } from '../../components/accountBox'
import { useParams } from 'react-router-dom';


const StyledInnerContainer =styled(InnerPageContainer)`
  margin:1em 0;
`

export function CustomerAccesPage(props) {
  const { action } = useParams();

  return (
    <>
      <NavBar />
      <PageContainer>
        <InnerPageContainer>
          <StyledInnerContainer>
            <AccountBox initialActive={action} />
          </StyledInnerContainer >
          
        </InnerPageContainer>
        <Footer />
      </PageContainer></>
  );
}
