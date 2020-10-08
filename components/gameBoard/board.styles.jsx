import styled from 'styled-components';

export const BoardContainer = styled.div`
	border-radius: 10px;
	width: 100%;
	height: 1000px;
	display: grid;
	grid-template: repeat(11, 1fr) / repeat(11, 1fr);
`;
