/**
 * Imports
 */
import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';
import Burger from './burger/Burger';

/**
 * Styles
 */
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.regular};
  padding-top: ${({ theme }) => theme.spacing.regular};
  @media (min-width: ${({ theme }) => theme.devices.desktop}) {
    width: 75vw;
  }
  @media (min-width: ${({ theme }) => theme.devices.desktopL}) {
    width: 65vw;
  }
`;
const StyledHeader = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const StyledContent = styled.div``;

const Main = styled.main`
  flex-basis: 100%;
  /* height: calc(100vh - 2rem); */
`;

const HeaderStyles = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.devices.desktopL}) {
    display: flex;
  }
`;

const StylesLogo = styled.h2`
  padding: ${({ theme }) => theme.spacing.regular};
  padding-left: 0;
  /* font-size: ${({ theme }) => theme.fontSizes.large}; */
  font-size: 24px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.dark};
  @media (min-width: ${({ theme }) => theme.devices.desktopL}) {
    font-size: 28px;
  }
`;

/**
 * Types
 */
type LayoutProps = {
  children?: ReactNode;
};

/**
 * Component
 */
const Layout = ({ children }: LayoutProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Head>
        <title>Portfolio | Thabisa Dingani</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="next project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <StyledHeader>
          <Link href="#">
            <a>
              <StylesLogo>T.Dingani</StylesLogo>
            </a>
          </Link>
          <Burger open={open} setOpen={setOpen} />

          <Menu open={open} />
          <HeaderStyles>
            <Header />
          </HeaderStyles>
        </StyledHeader>

        <Main>
          {/* Check if the user is on a desktop screen and if they are on the home page */}
          {/* If yes, the height of the main page will be exactly 100 view height for a clean look */}
          <StyledContent>{children}</StyledContent>
          <Footer />
        </Main>
      </Container>
    </>
  );
};

/**
 * Export
 */
export default Layout;
