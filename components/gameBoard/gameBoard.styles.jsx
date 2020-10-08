import styled, { css } from 'styled-components';

const verticalStyles = css`
	position: relative;
	left: -55px;
	top: 75px;
	margin-right: -55px;
	-webkit-transform: rotate(-90deg);
	-moz-transform: rotate(-90deg);
	-ms-transform: rotate(-90deg);
	-o-transform: rotate(-90deg);
	filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
`;

const getTeamStyles = ({ vertical }) => {
	if (vertical) {
		return verticalStyles;
	}
};

export const TeamLabel = styled.label`
	${getTeamStyles}
`;
