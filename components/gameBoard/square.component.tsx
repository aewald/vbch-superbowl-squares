import { SquareButton, SquareSpace } from './square.styles';

const square = ({ value, ...props }) => (
  <SquareButton {...props}>
    <SquareSpace>{value}</SquareSpace>
  </SquareButton>
);

export default square;
