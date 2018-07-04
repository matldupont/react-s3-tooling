import styled from 'styled-components';

import colors from '../utils/colors';
import fonts from '../utils/fonts';

const GallerySection = styled.section`
  width: 100vw;
  background-color: ${colors.black};
  color: ${colors.white.dark};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GalleryHeading = styled.h2`
  font-family: ${fonts.heading};
  font-size: 4rem;
`;

export {
  GallerySection,
  GalleryHeading,
};
