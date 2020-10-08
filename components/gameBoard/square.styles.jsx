import styled, { css } from 'styled-components';

const squareHeaderStyles = css`
	text-align: center;
	font-size: 5vw;
`;

const getSquareStyles = ({ as }) => {
	return as === 'div' ? squareHeaderStyles : '';
};

export const SquareButton = styled.button`
	background-color: 'gray';
	border: 2px solid gray;
	width: 100%;
	height: 100%;
	border-radius: 10px;
	${getSquareStyles}
`;
