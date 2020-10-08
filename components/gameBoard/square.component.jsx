import { SquareButton } from './square.styles';

const square = ({ value, ...props }) => <SquareButton {...props}>{value}</SquareButton>;

export default square;
