/**
 * Imports
 */
import Link from 'next/link';
import styled from 'styled-components';

// import { Button } from '../buttons/Buttons';
import { useRouter } from 'next/router';

/**
 * Styles
 */
const PrimaryNav = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;

  a {
    color: ${({ theme }) => theme.colors.dark};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.regular};
    font-size: 1.2rem;
  }

  @media (min-width: ${({ theme }) => theme.devices.desktopL}) {
    display: flex;
  }
`;

const NavStyles = styled.nav`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.medium};

  a {
    border-left: 2px solid transparent;
    margin: ${({ theme }) => theme.spacing.regular};
    margin-right: 0;
    transition: all 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.greyLight};
    }
  }

  div {
  }

  .active {
    color: ${({ theme }) => theme.colors.pink};
  }
`;

/**
 * Component
 */
const Nav = () => {
  const router = useRouter();
  return (
    <PrimaryNav>
      <NavStyles>
        <Link href="#services">
          <a className={router.pathname == '/services' ? 'active' : ''}>
            Services
          </a>
        </Link>

        <Link href="#services">
          <a className={router.pathname == '/Projects' ? 'active' : ''}>
            Projects
          </a>
        </Link>

        <Link href="#about">
          <a className={router.pathname == '/about' ? 'active' : ''}>About</a>
        </Link>

        <Link href="#contact">
          <a className={router.pathname == '/contact' ? 'active' : ''}>
            Contact
          </a>
        </Link>
      </NavStyles>
    </PrimaryNav>
  );
};

/**
 * Export
 */
export default Nav;
