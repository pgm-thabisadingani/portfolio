import React from 'react';
import styled from 'styled-components';
import { Button } from '../buttons/Buttons';
import { FadeSection } from '../section';
// import myResume from './assets/pdfs/thabisa_dingani_resume.pdf';

/**
 * Styles
 */
const StylesHero = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xxxxHuge};
  margin-bottom: ${({ theme }) => theme.spacing.xxxHuge};
  width: 100%;

  h1 {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.midXl};
    line-height: ${({ theme }) => theme.spacing.xlHuge};
    letter-spacing: -3px;

    @media (min-width: ${({ theme }) => theme.devices.tablet}) {
      font-size: ${({ theme }) => theme.fontSizes.xl};
    }
  }
  h3 {
    font-weight: ${({ theme }) => theme.fontWeights.light};
    font-size: ${({ theme }) => theme.fontSizes.large};
    line-height: 48px;

    @media (min-width: ${({ theme }) => theme.devices.tablet}) {
      font-size: ${({ theme }) => theme.fontSizes.mediumXl};
      font-size: 2.3rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.devices.tablet}) {
    width: 78%;
  }

  @media (min-width: ${({ theme }) => theme.devices.desktopXL}) {
    width: 58%;
    margin-top: ${({ theme }) => theme.spacing.xxxxxHuge};
    margin-bottom: ${({ theme }) => theme.spacing.xxxxxHuge};
  }
`;

/**
 * Styles
 */
const StylesButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: ;
  margin-top: ${({ theme }) => theme.spacing.large};
  @media (min-width: ${({ theme }) => theme.devices.mini}) {
    flex-direction: row;
  }
`;

const Hero = () => {
  // console.log(myResume);
  return (
    <FadeSection>
      <StylesHero>
        <h1 className="mb-6">Hey there, I am Thabisa </h1>
        <h3>A front-end developer, building beautiful web experiences.</h3>
        <StylesButtons>
          <Button
            style="mb-6"
            title="Contact me"
            type="primary"
            url="/#contact"
          />
          <Button
            title="View my CV"
            type="tertiary"
            url="/files/thabisa_dingani_resume.pdf"
          />
        </StylesButtons>
      </StylesHero>
    </FadeSection>
  );
};

export default Hero;
