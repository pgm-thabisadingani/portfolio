import React from 'react';
import styled from 'styled-components';
import { services } from '../../data/data';
import { CardServices } from '../cards';
import { Loading } from '../general';
import { FadeSection, Section } from '../section';

const StyledServiceList = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};

  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.devices.desktop}) {
    flex-direction: row;
  }
`;

const Services = () => {
  return (
    <>
      <div className="spacing">
        <Section title="Services" subTitle="What I Am Good At." id="services" />
        <StyledServiceList>
          {!services ? (
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
      </div>
    </>
  );
};

export default Services;
