import Image from 'next/image';
import React from 'react';
import { Tech } from '../../types';
import styled from 'styled-components';

const StylesContainer = styled.div`
  width: 250px;
`;

const TechItem = ({ svg, title }: Tech) => {
  return (
    <StylesContainer>
      <Image
        src={require(`./../../assets/tech/${svg}`)}
        alt={title}
        height="50%"
        width="50%"
      />
    </StylesContainer>
  );
};

export default TechItem;
