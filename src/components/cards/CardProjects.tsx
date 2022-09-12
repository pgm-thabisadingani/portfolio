// import Image from 'next/image';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Project } from '../../types';
import { GoMarkGithub, GoDeviceDesktop } from 'react-icons/go';
import Link from 'next/link';

const StylesCard = styled.div`
  flex-basis: 100%;
  margin: ${({ theme }) => theme.spacing.large} 0rem;

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

  @media (min-width: 1097px) {
    flex-basis: 47%;
  }
`;

const StylesCardImg = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing.large} 2rem;

  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark};
`;

const StylesCardInfo = styled.div`
  margin-top: ${({ theme }) => theme.spacing.regular};
  p {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
  .links {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    &-live {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      flex-direction: row-reverse;
      border: 1px ${({ theme }) => theme.colors.dark} solid;
      padding: 0.2rem 0.5rem;
      margin-top: ${({ theme }) => theme.spacing.regular};
      cursor: pointer;
      color: ${({ theme }) => theme.colors.dark};
      transition: all 0.2s ease;
      a {
        font-size: ${({ theme }) => theme.fontSizes.regular};
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.grey};
        color: ${({ theme }) => theme.colors.white};
        border: 1px ${({ theme }) => theme.colors.grey} solid;
      }

      &:first-child {
        background-color: ${({ theme }) => theme.colors.dark};
        color: ${({ theme }) => theme.colors.white};
        &:hover {
          background-color: ${({ theme }) => theme.colors.grey};
          color: ${({ theme }) => theme.colors.white};
          border: 1px ${({ theme }) => theme.colors.grey} solid;
        }
      }
    }
  }
  .tabs {
    display: flex;
    gap: 0.5rem;
    text-align: center;
    margin-top: ${({ theme }) => theme.spacing.regular};
    margin-bottom: ${({ theme }) => theme.spacing.small};
    li {
      background-color: ${({ theme }) => theme.colors.grayMid};
      color: ${({ theme }) => theme.colors.grey};

      padding: 0.1rem 0.5rem;
      border-radius: ${({ theme }) => theme.spacing.regular};
      text-align: center;
      text-transform: capitalize;
    }
  }
`;

const CardProjects = ({
  title,
  detail,
  img,
  lang,
  linkGit,
  linkLive,
}: Project) => {
  console.log(lang);
  return (
    <StylesCard>
      <StylesCardImg>
        <Image src={require(`./../../assets/projects/${img}`)} alt="code" />
      </StylesCardImg>
      <StylesCardInfo>
        <h4>{title}</h4>
        <p>{detail}</p>
        <ul className="tabs">
          {lang.map((la, index) => (
            <li key={index}>{la}</li>
          ))}
        </ul>
        <div className="links">
          <Link href={linkGit} className="links-live">
            <div className="links-live">
              <GoMarkGithub />
              <a target="_blank">Code</a>
            </div>
          </Link>
          <Link href={linkLive}>
            <div className="links-live">
              <GoDeviceDesktop />
              <a target="_blank"> Demo</a>
            </div>
          </Link>
        </div>
      </StylesCardInfo>
    </StylesCard>
  );
};

export default CardProjects;
