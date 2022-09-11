import React from 'react';
import styled from 'styled-components';
import { projects } from '../../data/data';
import { CardProjects } from '../cards';
import { Loading } from '../general';
import { Section } from '../section';

const StyledProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.large};

  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.devices.desktop}) {
    flex-direction: row;
  }
`;

const Projects = () => {
  console.log(projects);
  return (
    <>
      <Section title="Projects" subTitle="Explore My Work." id="projects" />
      <StyledProjectList>
        {!projects ? (
          <Loading />
        ) : (
          projects.map((project) => {
            return (
              <CardProjects
                key={project.id}
                title={project.title}
                detail={project.detail}
                img={project.img}
                linkGit={project.linkGit}
                linkLive={project.linkLive}
                date={project.date}
                lang={project.lang}
              />
            );
          })
        )}
      </StyledProjectList>
    </>
  );
};

export default Projects;
