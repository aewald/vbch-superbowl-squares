import { BackdropUI } from './backdrop.styles';

const backdrop = ({ show, ...props }) => (show ? <BackdropUI {...props}></BackdropUI> : null);

export default backdrop;
