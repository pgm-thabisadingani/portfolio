import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Service } from '../../types';

const StylesCard = styled.div`
  h4 {
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    margin-bottom: ${({ theme }) => theme.spacing.small};
    margin-top: ${({ theme }) => theme.spacing.small};
  }
  p {
    font-size: ${({ theme }) => theme.fontSizes.mediumLarge};
    font-weight: ${({ theme }) => theme.fontWeights.light};
  }
`;

const CardServices = ({ title, detail, svg }: Service) => {
  return (
    <StylesCard>
      <Image
        src={require(`./../../assets/services/${svg}`)}
        alt="code"
        height="50%"
        width="50%"
      />
      <h4>{title}</h4>
      <p>{detail}</p>
    </StylesCard>
  );
};

export default CardServices;
