import styled, { css } from 'styled-components';
import styles from 'styles';

const { xs, sm, md } = styles.breakpoint;

const verticalStyles = css`
  left: -45px;
  top: 75px;
  margin-right: -55px;
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
	
	${md} {
		left: -85px;
		top: 135px;
	}
`;

const horizontalStyles = css`
	${xs} {
		left: 0;
	}

	${sm} {
		left: 10px;
	}

	${md} {
		left: -45px;
	}
`;

const getTeamStyles = ({ vertical }) => {
	return vertical ? verticalStyles : horizontalStyles;
};

export const TeamLabel = styled.label`
  position: relative;
	top: 12px;
	left: -40px;
	${getTeamStyles}
	
	

	${md} {
		font-size:30px;
	}
`;
