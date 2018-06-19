import styled from 'styled-components';

import welcomeImage from './images/welcome.jpg';

export default styled.main`
  background-image: linear-gradient(
    to right bottom, 
    rgba(0,0,0, 0.4),
    rgba(0,0,0, 0.4)), 
  url(${welcomeImage});
  height: 80vh;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
`;
