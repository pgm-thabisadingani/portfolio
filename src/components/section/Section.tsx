import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const StylesSection = styled.div``;

/**
 * Interface
 */
export interface Props {
  title: string;
  intro: string;
  id: string;
}

const Section = ({ title, intro, id }: Props) => {
  return (
    <StylesSection id={id}>
      <h2>{title}</h2>
      <p>{intro}</p>
    </StylesSection>
  );
};

export default Section;
