import React from 'react';
/**
 * Interface
 */
export interface Props {
  children: [] | any;
}
const error = ({ children }: Props) => {
  return (
    <div>
      <p>{children}</p>
    </div>
  );
};

export default error;
