/**
 * Imports
 */
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

// import { Button } from '../buttons/Buttons';

/**
 * Styles
 */
export const StyledMenu = styled.nav<Props>`
  display: none;

  a {
    color: ${({ theme }) => theme.colors.pink};
    text-decoration: none;
    font-size: 2.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    text-transform: uppercase;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.white};
  }
  @media (max-width: ${({ theme }) => theme.devices.desktopL}) {
    flex-flow: column wrap;
    background-color: ${({ theme }) => theme.colors.dark};
    position: fixed;
    z-index: 9999;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    display: flex;
    width: 100%;
    transition: transform 0.3s ease-in-out;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.huge};
  }
`;

/**
 * Interface
 */
interface Props {
  open: boolean;
}

/**
 * Component
 */
const Menu = ({ open }: Props) => {
  return (
    <StyledMenu open={open}>
      {/* <div className="">
        <Button title="Donate" type="primary" url="/donate" />
      </div> */}

      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/services">
        <a>Services</a>
      </Link>

      <Link href="/services">
        <a>Projects</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>

      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </StyledMenu>
  );
};

/**
 * Export
 */
export default Menu;
