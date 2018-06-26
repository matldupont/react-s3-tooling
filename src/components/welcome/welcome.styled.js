import styled from 'styled-components';

import colors from '../utils/colors';
import fonts from '../utils/fonts';
import transitions from '../utils/transitions';

const WelcomeSection = styled.section`
  width: 50%;
  color: ${colors.white};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${transitions['.2s']}
  position: relative;
`;

const WelcomeTagline = styled.span`
  font-size: 1.7rem;
  ${transitions['.2s']}
`;

const WelcomeHeading = styled.h1`
  font-size: 4rem;
  font-family: ${fonts.heading};
  font-weight: 100;
  ${transitions['.2s']}
`;

export {
  WelcomeSection,
  WelcomeTagline,
  WelcomeHeading,
};
