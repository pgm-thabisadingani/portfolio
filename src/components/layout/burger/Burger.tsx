/**
 * Imports
 */

import styled from 'styled-components';

import { BurgerStyles } from './Burger.styled';

/**
 * Styles
 */
const NavStyles = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.devices.desktopL}) {
    display: flex;
  }
`;
/**
 * Interface
 */
interface Props {
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpen: (open: boolean) => void;
}

/**
 * Component
 */
const Burger = ({ setOpen, open }: Props) => {
  return (
    <NavStyles>
      <BurgerStyles open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerStyles>
    </NavStyles>
  );
};

/**
 * Export
 */
export default Burger;
