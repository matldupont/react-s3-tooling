import styled from 'styled-components';

import colors from '../utils/colors';
import fonts from '../utils/fonts';

const StyledHeader = styled.header`
  color: ${colors.black};
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5;
  text-align: center;
  padding: 3rem 0;
  font-family: ${fonts.heading};
`;

const HeaderText = styled.span`
  display: inline-block;
  padding-bottom: .5rem;
  border-bottom: 1px solid ${colors.black};
  font-family: ${fonts.heading};
`;

export { StyledHeader, HeaderText };
