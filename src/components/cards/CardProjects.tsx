// import Image from 'next/image';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Project } from '../../types';
import { GoMarkGithub, GoDeviceDesktop } from 'react-icons/go';
import Link from 'next/link';

const StylesCard = styled.div`
  width: 100%;
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
    margin: ${({ theme }) => theme.spacing.small} 0rem;
    &:nth-child(even) {
      margin-top: 10rem;
    }
  }
`;

const StylesCardImg = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing.large} 2rem;
  height: unset;

  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark};
  @media (min-width: 1097px) {
    flex-basis: 47%;
    height: 25rem;
  }
`;

const StylesCardInfo = styled.div`
  margin-top: ${({ theme }) => theme.spacing.regular};
  p {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    max-height: unset;

    @media (min-width: 1097px) {
      max-height: 8rem;
    }
    @media (min-width: ${({ theme }) => theme.devices.desktopL}) {
      max-height: 7rem;
    }
    @media (min-width: ${({ theme }) => theme.devices.desktopXL}) {
      max-height: 4.2rem;
    }
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
      color: ${({ theme }) => theme.colors.dark};

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
          <Link href={linkGit} className="links-live" target="_blank">
            <a className="links-live" target="_blank" rel="noopener noreferrer">
              <GoMarkGithub />
              <span>Code</span>
            </a>
          </Link>
          {linkLive ? (
            <Link href={linkLive} target="_blank">
              <a
                className="links-live"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoDeviceDesktop />
                <span>Demo</span>
              </a>
            </Link>
          ) : null}
        </div>
      </StylesCardInfo>
    </StylesCard>
  );
};

export default CardProjects;
