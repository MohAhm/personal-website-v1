import React from 'react'

import 'normalize.css'
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const ContentStyles = styled.div`
  padding: 2rem;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <ContentStyles>
        {children}
      </ContentStyles>
    </>
  )
}

export default Layout