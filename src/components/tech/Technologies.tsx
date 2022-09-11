import React from 'react';
import styled from 'styled-components';
import { technologies } from '../../data/data';
import { Loading } from '../general';
import TechItem from './TechItem';

const StylesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: ${({ theme }) => theme.spacing.xxxxxHuge};
`;

console.log(technologies);

const Technologies = () => {
  return (
    <StylesContainer className="w-full h-[100px] flex justify-center items-center border">
      {!technologies ? (
        <Loading />
      ) : (
        technologies.map((tech) => {
          return <TechItem key={tech.id} svg={tech.svg} title={tech.title} />;
        })
      )}
    </StylesContainer>
  );
};

export default Technologies;
