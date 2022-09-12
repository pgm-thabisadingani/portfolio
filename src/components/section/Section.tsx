import React from 'react';
import styled from 'styled-components';
import FadeSection from './FadeSection';

const StylesSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.large};
  margin-top: ${({ theme }) => theme.spacing.xxxxxHuge};
  h4 {
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: ${({ theme }) => theme.fontWeights.medium};

    @media (min-width: ${({ theme }) => theme.devices.tablet}) {
      font-size: 2.5rem;
    }
  }
  h2 {
    color: ${({ theme }) => theme.colors.pink};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    text-transform: uppercase;

    @media (min-width: ${({ theme }) => theme.devices.tablet}) {
      font-size: ${({ theme }) => theme.fontSizes.medium};
    }
  }
`;

/**
 * Interface
 */
export interface Props {
  title: string;
  subTitle: string;
  id: string;
}

const Section = ({ title, subTitle, id }: Props) => {
  return (
    <FadeSection>
      <StylesSection id={id}>
        <h2>{title}</h2>
        <h4>{subTitle}</h4>
      </StylesSection>
    </FadeSection>
  );
};

export default Section;
