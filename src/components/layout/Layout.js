/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import CSSReset from '../../globalStyles/Reset';
import GlobalStyles from '../../globalStyles/GlobalStyles';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import styled from 'styled-components';

const Layout = ({ children }) => {
  const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
  `;

  return (
    <>
      <CSSReset />
      <GlobalStyles />
      <Container>
        <Header siteTitle="Some title" />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
