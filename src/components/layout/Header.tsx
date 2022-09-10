/**
 * Imports
 */
import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';

/**
 * Styles
 */
const StyledHeader = styled.header``;

/**
 * Component
 */
const Header = () => {
  return (
    <StyledHeader>
      <Nav />
    </StyledHeader>
  );
};

/**
 * Export
 */
export default Header;
