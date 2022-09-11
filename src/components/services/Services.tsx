import React, { useState } from 'react';
import styled from 'styled-components';
import { services } from '../../data/data';
import { CardServices } from '../cards';
import { Error, Loading } from '../general';
import { Section } from '../section';

const StyledServiceList = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.large};

  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.devices.desktop}) {
    flex-direction: row;
  }
`;

const Services = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  //   console.log(services);
  return (
    <>
      <Section title="Services" subTitle="What I Am Good At." id="services" />
      <StyledServiceList>
        {error ? (
          <Error>{error}</Error>
        ) : loading || !services ? (
          <Loading />
        ) : (
          services.map((service) => {
            return (
              <CardServices
                key={service.id}
                title={service.title}
                detail={service.detail}
                svg={service.svg}
              />
            );
          })
        )}
      </StyledServiceList>
    </>
  );
};

export default Services;
