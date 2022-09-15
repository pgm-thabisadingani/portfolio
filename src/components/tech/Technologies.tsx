import React from 'react';
import styled from 'styled-components';
import { technologies } from '../../data/data';
import { Loading } from '../general';
import { FadeSection } from '../section';
import TechItem from './TechItem';

const StylesContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xxxxHuge};

  overflow: hidden;
  position: relative;
  width: 100%;

  &::before,
  &::after {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    content: '';
    height: 100px;
    position: absolute;
    width: 250px;
    z-index: 2;
  }

  &::after {
    right: 0;
    top: 0;
    -webkit-transform: rotateZ(180deg);
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }
`;

const StylesTracker = styled.div`
  -webkit-animation: scroll 40s linear infinite;
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(200px * 14);
`;

const Technologies = () => {
  return (
    <FadeSection>
      <StylesContainer className="w-full h-[100px] flex justify-center items-center">
        <StylesTracker>
          {!technologies ? (
            <Loading />
          ) : (
            technologies.map((tech) => {
              return (
                <TechItem key={tech.id} svg={tech.svg} title={tech.title} />
              );
            })
          )}
        </StylesTracker>
      </StylesContainer>
    </FadeSection>
  );
};

export default Technologies;
