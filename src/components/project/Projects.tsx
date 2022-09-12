import React, { useState } from 'react';
import styled from 'styled-components';
import { catergories, projects } from '../../data/data';
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

const StylesButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  text-transform: Capitalize;

  .active {
    color: ${({ theme }) => theme.colors.pink};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

const Projects = () => {
  const [category, setCategory] = useState('All');

  console.log(category);

  return (
    <>
      <Section title="Projects" subTitle="Explore My Work." id="projects" />
      <StylesButtons>
        {!catergories ? (
          <Loading />
        ) : (
          catergories.map((cat) => {
            return (
              <p
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`list-group-item ${cat.id == category && 'active'}`}
              >
                {cat.title}
              </p>
            );
          })
        )}
      </StylesButtons>
      <StyledProjectList>
        {!projects ? (
          <Loading />
        ) : (
          projects.map((project) => {
            if (category !== 'All' || category !== undefined) {
              if (category === project.catergoryId) {
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
              }
            }
            if (category === 'All') {
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
            }
          })
        )}
      </StyledProjectList>
    </>
  );
};

export default Projects;
