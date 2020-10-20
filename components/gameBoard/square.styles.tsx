import styled, { css } from 'styled-components';
import styles from 'styles';

const { xs, sm, md, lg, xl } = styles.breakpoint;

const squareHeaderStyles = css`
  background-color: transparent;
  ${xs} {
    font-size: 5vw;
  }

  ${sm} {
    font-size: 1.8em;
  }

  ${md} {
    font-size: 2.5em;
  }

  ${lg} {
    font-size: 3.4em;
  }

  ${xl} {
    font-size: 4em;
  }
`;

const squareButtonsStyles = css`
  line-height: 2.4em;

  ${xs} {
    font-size: 3.7vw;
  }

  ${sm} {
    font-size: 1.2em;
  }

  ${md} {
    font-size: 1.6em;
  }

  ${lg} {
    font-size: 2.1em;
  }

  ${xl} {
    font-size: 2.6em;
  }
`;
const selectedColorStyles = css`
  background-color: green;
`;

const getDisabledStyles = ({ selectedColor }) => {
  if (selectedColor) {
    return selectedColorStyles;
  }
};

const getSquareStyles = ({ as }) => {
  return as === 'div' ? squareHeaderStyles : squareButtonsStyles;
};

export const SquareButton = styled.button`
  background-color: transparent;
  border: 2px solid #495057;
  width: 100%;
  border-radius: 10px;
  padding: 0 0 100%;
  position: relative;
  text-align: center;
  ${getSquareStyles}

  &:disabled {
    background-color: gray;
    ${getDisabledStyles}
  }
`;

export const SquareSpace = styled.div`
  position: absolute;
  background-color: transparent;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  color: white;
`;
