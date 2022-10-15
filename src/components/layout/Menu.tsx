/**
 * Imports
 */
import Link from 'next/link';
import React, { useEffect } from 'react';
import styled from 'styled-components';

// import { Button } from '../buttons/Buttons';

/**
 * Styles
 */
export const StyledMenu = styled.nav<Props>`
  display: none;

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    font-size: 2.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    text-transform: uppercase;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.pink};
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
  // eslint-disable-next-line no-unused-vars
  setOpen?: (open: boolean) => void;
}

/**
 * Component
 */
const Menu = ({ setOpen, open }: Props) => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        document.querySelector(hash).scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  });

  console.log(open);
  return (
    <StyledMenu open={open}>
      <Link href="#">
        <a onClick={() => setOpen(!open)}>Home</a>
      </Link>

      <Link href="#services">
        <a onClick={() => setOpen(!open)}>Services</a>
      </Link>

      <Link href="#projects">
        <a onClick={() => setOpen(!open)}>Projects</a>
      </Link>

      <Link href="#about">
        <a onClick={() => setOpen(!open)}>About</a>
      </Link>

      <Link href="#contact">
        <a onClick={() => setOpen(!open)}>Contact</a>
      </Link>
    </StyledMenu>
  );
};

/**
 * Export
 */
export default Menu;
