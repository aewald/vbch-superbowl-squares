import { ButtonUI } from './button.styles';

const Button = ({ children, ...props }) => <ButtonUI {...props}>{children}</ButtonUI>;

export default Button;
