import * as React from 'react';

import {
  PriceListSection,
  PriceListContainer,
  PriceListHeading,
  PriceListItem,
  PriceListDetails,
  PriceListName,
  PriceListPrice,
  PriceListDescription,
  PriceListNote,
} from './price_list.styled';

const PriceList = () => {
  return (
    <PriceListSection>
      <PriceListContainer>
        <PriceListHeading>
          Price right tune up for your bicycle
        </PriceListHeading>
        <PriceListItem>
          <PriceListDetails>
            <PriceListName>
              Basic
            </PriceListName>
            <PriceListPrice>
              $100
            </PriceListPrice>
          </PriceListDetails>
          <PriceListDescription>
            We adjust and tune your bike.
          </PriceListDescription>
        </PriceListItem>
        <PriceListItem>
          <PriceListDetails>
            <PriceListName>
              Daily Commuter
            </PriceListName>
            <PriceListPrice>
              $180
            </PriceListPrice>
          </PriceListDetails>
          <PriceListDescription>
            Basic + new cables and housing and drivetrain cleaned.
          </PriceListDescription>
        </PriceListItem>
        <PriceListItem>
          <PriceListDetails>
            <PriceListName>
              The Works
            </PriceListName>
            <PriceListPrice>
              $250
            </PriceListPrice>
          </PriceListDetails>
          <PriceListDescription>
            Daily commuter + hubs &amp; headset &amp; bottom bracket overhauled.
          </PriceListDescription>
        </PriceListItem>
        <PriceListItem>
          <PriceListDetails>
            <PriceListName>
              Restoration
            </PriceListName>
            <PriceListPrice>
              $50/hr
            </PriceListPrice>
          </PriceListDetails>
          <PriceListDescription>
            Bringing a vintage bike back to life.
          </PriceListDescription>
        </PriceListItem>
        <PriceListNote>
          * Prices shown include labor only
        </PriceListNote>
      </PriceListContainer>
    </PriceListSection>
  );
};

export default PriceList;
