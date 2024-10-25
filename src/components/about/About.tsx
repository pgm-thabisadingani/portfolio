/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Section } from '../section';

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
  align-items: center;

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const About = () => {
  return (
    <div className="spacing">
      <Section title="About" subTitle="Who I Am." id="about" />
      <StylesAbout>
        <StylesLeft>
          <p>
            I’m a dedicated Front-End Developer based in Belgium, originally
            from South Africa, with a focus on building fast, scalable, and
            interactive web applications. Skilled in ReactJS, NextJS,
            TypeScript, JavaScript and CSS/HTML, I also bring CMS experience
            with Prismic and a strong background in UI/UX design to create
            seamless user experiences.
          </p>
          <p>
            Recently, I worked in the gaming and sports betting sector, where I
            collaborated with cross-functional teams to deliver high-performance
            applications. My role involved developing and optimizing front-end
            components, implementing micro frontends, and integrating legacy
            systems to enhance the digital experience. I transformed UX/UI
            designs into responsive, user-friendly applications and wrote
            comprehensive unit tests to ensure reliability in high-traffic
            environments.
          </p>
          <p>
            Actively expanding my skills in Angular, I’m committed to continuous
            improvement and eager to join a team that values innovation,
            collaboration, and exceptional user experiences.
          </p>
        </StylesLeft>

        <StylesRight>
          <div className="image-container">
            <Image
              src={require(`./../../assets/avatar/avatar.png`)}
              alt="Thabisa Dingani"
              height="350"
              width="350"
            />
          </div>
        </StylesRight>
      </StylesAbout>
    </div>
  );
};

export default About;
