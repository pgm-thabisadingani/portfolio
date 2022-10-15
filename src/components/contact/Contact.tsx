import React from 'react';
import styled from 'styled-components';
import { contacts } from '../../data/data';
import { Loading } from '../general';
// import { FadeSection, Section } from '../section';
import ContactItem from './ContactItem';

const StylesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Contact = () => {
  return (
    <>
      <div className="spacing">
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
                  social={contact.social}
                  info={contact.info}
                />
              );
            })
          )}
        </StylesContainer>
      </div>
    </>
  );
};

export default Contact;
