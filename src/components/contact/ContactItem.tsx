import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import React from 'react';
import { Contact } from '../../types';

const StylesContainer = styled.div`
  margin-right: ${({ theme }) => theme.spacing.large};
`;

const ContactItem = ({ svg, url }: Contact) => {
  return (
    <StylesContainer>
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
    </StylesContainer>
  );
};

export default ContactItem;
