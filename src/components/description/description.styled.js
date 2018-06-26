import styled from 'styled-components';

import colors from '../utils/colors';
import fonts from '../utils/fonts';

const DescriptionSection = styled.section`
  background-color: ${colors.white};
  width: 50vw;
  margin-right: 10rem;
`;

const DescriptionContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DescriptionHeadings = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 4rem;
  justify-content: center;
`;

const DescriptionHeading = styled.h3`
  font-size: 2rem; 
  font-family: ${fonts.heading};
  font-weight: 400;
  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

const DescriptionText = styled.p`
  font-size: 1.5rem;
`;

const DescriptionButton = styled.button`
  color: ${colors.grey};
  border: none;
  background: transparent;
  cursor: pointer;
  visibility: hidden;
  padding: 1rem;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);

  animation: pulsate 1s infinite;
`;

const DescriptionButtonText = styled.span`
  display: block;
  font-size: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 2px;
`;

const DescriptionButtonIcon = styled.span`
  display: block;
  text-transform: uppercase;
  font-size: 8rem;
  transform: rotateZ(90deg) translateX(-28%) translateY(-1%);
`;

export {
  DescriptionSection,
  DescriptionContainer,
  DescriptionHeadings,
  DescriptionHeading,
  DescriptionText,
  DescriptionButton,
  DescriptionButtonText,
  DescriptionButtonIcon,
};
