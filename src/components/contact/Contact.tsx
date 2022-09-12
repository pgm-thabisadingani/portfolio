import React from 'react';
import styled from 'styled-components';
import { contacts } from '../../data/data';
import { Loading } from '../general';
import { FadeSection, Section } from '../section';
import ContactItem from './ContactItem';

const StylesContainer = styled.div`
  display: flex;
`;

console.log(contacts);

const Contact = () => {
  return (
    <FadeSection>
      <Section title="Contact" subTitle="Get In Touch." id="contact" />
      <StylesContainer>
        {!contacts ? (
          <Loading />
        ) : (
          contacts.map((contact) => {
            return (
              <ContactItem
                key={contact.id}
                svg={contact.svg}
                url={contact.url}
              />
            );
          })
        )}
      </StylesContainer>
    </FadeSection>
  );
};

export default Contact;
