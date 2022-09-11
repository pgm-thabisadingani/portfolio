import Image from 'next/image';
import React from 'react';
import { Tech } from '../../types';

const TechItem = ({ svg, title }: Tech) => {
  return (
    <div>
      <Image
        src={require(`./../../assets/tech/${svg}`)}
        alt={title}
        height="50%"
        width="50%"
      />
    </div>
  );
};

export default TechItem;
