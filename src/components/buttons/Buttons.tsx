/**
 * Imports
 */
import styled from 'styled-components';
import React, { ReactNode } from 'react';

/**
 * Styles
 */
const BtnStyles = styled.a`
  background-color: ${({ theme }) => theme.colors.dark};
  text-align: center;
  width: 100%;
  border: 2px ${({ theme }) => theme.colors.dark} solid;
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.regular};
  text-transform: uppercase;
  padding: ${({ theme }) => theme.spacing.small}
    ${({ theme }) => theme.spacing.large};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-decoration: none;
  transition: all 0.2s ease;
  width: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.white};
    border: 2px ${({ theme }) => theme.colors.grey} solid;
  }
  @media (min-width: ${({ theme }) => theme.devices.mini}) {
    flex-direction: row;
    width: 15rem;
  }
`;

const SubmitBtnStyles = styled.button`
  background: transparent;
  border: 2px ${({ theme }) => theme.colors.white} solid;
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.regular};
  padding: ${({ theme }) => theme.spacing.small}
    ${({ theme }) => theme.spacing.medium};
  text-transform: uppercase;
  cursor: pointer;
`;

const BtnSecondary = styled(BtnStyles)`
  border: 2px ${({ theme }) => theme.colors.pink} solid;
  &:hover {
    background-color: ${({ theme }) => theme.colors.pink};
    color: ${({ theme }) => theme.colors.white};
  }
`;
const BtnTertiary = styled(BtnStyles)`
  background: transparent;
  border: 2px ${({ theme }) => theme.colors.dark} solid;
  color: ${({ theme }) => theme.colors.dark};
  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.white};
    border: 2px ${({ theme }) => theme.colors.grey} solid;
  }
`;

/**
 * Interfaces
 */
export interface ButtonLink {
  title: string;
  type?: 'primary' | 'secondary' | 'tertiary' | null; //a union is better than enums
  url?: string;
  style?: string;
}

interface SubmitBtn {
  title: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: any;
  children: ReactNode;
  color: string;
}

/**
 * Components
 */
export const Button = ({ title, type, url }: ButtonLink) => {
  return (
    <>
      {type === 'primary' && <BtnStyles href={url}>{title}</BtnStyles>}
      {type === 'secondary' && <BtnSecondary href={url}>{title}</BtnSecondary>}
      {type === 'tertiary' && (
        <BtnTertiary href={url} target="_blank">
          {title}
        </BtnTertiary>
      )}
    </>
  );
};

/**
 * This is a real button not a link element
 */
export const SubmitButton = ({ type, color, children, onClick }: SubmitBtn) => {
  return (
    <>
      <SubmitBtnStyles
        onClick={onClick}
        type={type}
        style={{
          border: `2px ${color} solid`,
          borderRadius: '3px',
          color: `${color}`,
        }}
      >
        {children}
      </SubmitBtnStyles>
    </>
  );
};
