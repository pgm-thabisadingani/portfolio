import React, { useState } from 'react';
import styled from 'styled-components';
import { catergories, projects } from '../../data/data';
import { CardProjects } from '../cards';
import { Loading } from '../general';
import { Section } from '../section';
// import { FadeSection, Section } from '../section';

const StyledProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
  @media (min-width: ${({ theme }) => theme.devices.desktop}) {
    flex-direction: row;
    margin-top: -3rem;
  }
`;

const StylesButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  text-transform: Capitalize;
  color: ${({ theme }) => theme.colors.dark};

  .active {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.pink};
    border: 1px ${({ theme }) => theme.colors.pink} solid;
  }
`;
const StyleCategory = styled.div`
  border: 1px ${({ theme }) => theme.colors.dark} solid;
  padding: ${({ theme }) => theme.spacing.Xsmall} 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.pink};
    border: 1px ${({ theme }) => theme.colors.pink} solid;
  }
`;

const Projects = () => {
  const [category, setCategory] = useState('All');

  return (
    <>
      <div className="spacing">
        <Section title="Projects" subTitle="Explore My Work." id="projects" />
        <StylesButtons>
          {!catergories ? (
            <Loading />
          ) : (
            catergories.map((cat) => {
              return (
                <StyleCategory
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`list-group-item ${
                    cat.id == category && 'active'
                  }`}
                >
                  {cat.title}
                </StyleCategory>
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
      </div>
    </>
  );
};

export default Projects;
