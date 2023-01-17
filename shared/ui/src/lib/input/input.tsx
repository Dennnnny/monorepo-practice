import React, { useState } from 'react';
import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface InputProps {}

const StyledInput = styled.div`
  color: pink;
`;

export function Input(props: InputProps) {
  const [value, setValue] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
  };
  return (
    <StyledInput>
      <input value={value} onChange={handleChange} />
    </StyledInput>
  );
}

export default Input;
