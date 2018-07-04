import styled from 'styled-components';

import colors from '../utils/colors';
import fonts from '../utils/fonts';

const AdditionalSection = styled.section`
  background-color: ${colors.white};
  width: 50vw;
  transition: all .4s ease-in-out;
`;

const AdditionalContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AdditionalHeading = styled.h2`
  font-size: 2rem; 
  font-family: ${fonts.heading};
  font-weight: 300;
  margin-bottom: 4rem;
`;

const AdditionalItem = styled.div`
  width: 60%;
  max-width: 40rem;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const AdditionalDetails = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 1.5rem;
`;

const AdditionalItemName = styled.div`
`;

const AdditionalItemPrice = styled.div`
`;

const AdditionalDescription = styled.p`
  font-size: 1.2rem;
`;

const AdditionalNote = styled.div`
`;

export {
  AdditionalSection,
  AdditionalContainer,
  AdditionalHeading,
  AdditionalItem,
  AdditionalDetails,
  AdditionalItemName,
  AdditionalItemPrice,
  AdditionalDescription,
  AdditionalNote,
};
