import styled from 'styled-components';

import colors from '../utils/colors';
import fonts from '../utils/fonts';

const PriceListSection = styled.section`
  width: 50vw;
  background-color: ${colors.white};
`;

const PriceListContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PriceListHeading = styled.h2`
  font-size: 2rem; 
  font-family: ${fonts.heading};
  font-weight: 300;
  margin-bottom: 4rem;
`;

const PriceListItem = styled.div`
  width: 60%;
  max-width: 40rem;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const PriceListDetails = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 1.5rem;
`;

const PriceListName = styled.div`

`;

const PriceListPrice = styled.div`

`;

const PriceListDescription = styled.p`
  font-size: 1.2rem;
`;

const PriceListNote = styled.div`

`;

export {
  PriceListSection,
  PriceListContainer,
  PriceListHeading,
  PriceListItem,
  PriceListDetails,
  PriceListName,
  PriceListPrice,
  PriceListDescription,
  PriceListNote,
};
