import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import React from 'react';
import { Contact } from '../../types';

const StylesContainer = styled.div`
  margin-right: ${({ theme }) => theme.spacing.medium};
  &:nth-child(3),
  &:nth-child(4) {
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing.regular};
  }
  @media (min-width: ${({ theme }) => theme.devices.tablet}) {
    &:nth-child(3),
    &:nth-child(4) {
      width: unset;
      margin-top: unset;
    }
  }
`;

const ContactItem = ({ svg, url, social, info }: Contact) => {
  return (
    <StylesContainer>
      {social === true ? (
        <Link href={url} target="_blank">
          <a target="_blank" rel="noopener noreferrer">
            <Image
              src={require(`./../../assets/contact/${svg}`)}
              alt="icone"
              height="40"
              width="40"
            />
          </a>
        </Link>
      ) : (
        <Link href={url} target="_blank">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-slate-500 text-lg "
          >
            <Image
              src={require(`./../../assets/contact/${svg}`)}
              alt="icone"
              height="40"
              width="40"
            />
            <span className="ml-2 font-normal">{info}</span>
          </a>
        </Link>
      )}
    </StylesContainer>
  );
};

export default ContactItem;
