// import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Project } from '../../types';

const StylesCard = styled.div`
  flex-basis: 100%;
  flex-grow: 1;
  h4 {
    font-size: 1.7rem;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    margin-bottom: ${({ theme }) => theme.spacing.small};
    margin-top: ${({ theme }) => theme.spacing.small};
  }
  p {
    font-size: ${({ theme }) => theme.fontSizes.mediumLarge};
    font-weight: ${({ theme }) => theme.fontWeights.light};
  }

  @media (min-width: ${({ theme }) => theme.devices.mini}) {
    flex-basis: 45%;
  }

  @media (min-width: ${({ theme }) => theme.devices.desktop}) {
    flex-basis: 30%;
  }
`;

const CardProjects = ({
  title,
  detail,
  img,
  lang,
  linkGit,
  linkLive,
  date,
}: Project) => {
  console.log(lang);
  return (
    <StylesCard>
      <div>
        <p>{img}</p>
      </div>
      <div>
        <h4>{title}</h4>
        <p>{detail}</p>
        <p>{date}</p>
        <p>{linkLive}</p>
        <p>{linkGit}</p>
      </div>
    </StylesCard>
  );
};

export default CardProjects;
