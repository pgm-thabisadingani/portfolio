import styled from 'styled-components';

interface Props {
  open: boolean;
}

export const BurgerStyles = styled.button<Props>`
  width: ${({ theme }) => theme.spacing.large};
  height: ${({ theme }) => theme.spacing.large};
  z-index: 100000;
  display: none;
  border: none;
  cursor: pointer;
  background: transparent;
  overflow: hidden;

  &:focus {
    outline: none;
  }

  @media (max-width: ${({ theme }) => theme.devices.desktopL}) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: ${({ theme }) => theme.spacing.large};
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#fff' : '#000')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
  div:hover {
    background-color: ${({ theme }) => theme.colors.pink};
  }
`;
