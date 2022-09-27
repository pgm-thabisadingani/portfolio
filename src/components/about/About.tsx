/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FadeSection, Section } from '../section';
import styled from 'styled-components';
import Image from 'next/image';

const StylesAbout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-top: -2rem;
  p {
    margin-bottom: ${({ theme }) => theme.spacing.regular};
    margin-right: reset;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    @media (min-width: ${({ theme }) => theme.devices.mini}) {
      margin-bottom: ${({ theme }) => theme.spacing.medium};
      margin-right: ${({ theme }) => theme.spacing.large};
    }
  }
  @media (min-width: ${({ theme }) => theme.devices.tabletLarge}) {
    flex-direction: row;
  }
`;
const StylesLeft = styled.div`
  flex-basis: 50%;
`;
const StylesRight = styled.div`
  flex-basis: 40%;
  display: flex;
  justify-content: center;
  Image {
    align-items: center;
  }
`;

const About = () => {
  return (
    <FadeSection>
      <div className="spacing">
        <Section title="About" subTitle="Who I Am." id="about" />
        <StylesAbout>
          <StylesLeft>
            <p>
              I'm a Belgian-based front-end developer and designer from South
              Africa. Passionate about creating websites that are fast,
              interactive, and cross-platform and device compatible.
            </p>
            <p>
              I specialize in web development, user interface design, HTML/CSS,
              ReactJS/NextJS/React Native and CMS. Proficient at identifying
              opportunities to enhance front-end design and improve the user
              experience.
            </p>
          </StylesLeft>
          <StylesRight>
            <Image
              src={require(`./../../assets/avatar/avatar.png`)}
              alt="Thabisa dingani"
              height="350"
              width="350"
            />
          </StylesRight>
        </StylesAbout>
      </div>
    </FadeSection>
  );
};

export default About;
