import styled, { css } from 'styled-components';
import { FormControl } from 'react-bootstrap';

const invalidStyles = css`
  border: 1px solid red;
  background-color: #fda49a;
`;

const getInvalidStyles = ({ isValid }) => {
  if (isValid) {
    return;
  }

  return invalidStyles;
};

export const FormControlUI = styled(FormControl)`
  outline: none;
  border: 1px solid #ccc;
  background-color: white;
  font: inherit;
  padding: 6px 10px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  ${getInvalidStyles}

  &:focus {
    outline: none;
    background-color: #ccc;
  }
`;

export const FormLabel = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
`;
