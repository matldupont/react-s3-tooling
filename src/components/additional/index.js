import * as React from 'react';

import {
  AdditionalSection,
  AdditionalContainer,
  AdditionalHeading,
  AdditionalItem,
  AdditionalDetails,
  AdditionalItemName,
  AdditionalItemPrice,
  AdditionalDescription,
  AdditionalNote,
} from './additional.styled';

const Additional = () => {
  return (
    <AdditionalSection>
      <AdditionalContainer>
        <AdditionalHeading>
          Additional Services
        </AdditionalHeading>
        <AdditionalItem>
          <AdditionalDetails>
            <AdditionalItemName>
              Basic
            </AdditionalItemName>
            <AdditionalItemPrice>
              $100
            </AdditionalItemPrice>
          </AdditionalDetails>
          <AdditionalDescription>
            We adjust and tune your bike.
          </AdditionalDescription>
        </AdditionalItem>
        <AdditionalItem>
          <AdditionalDetails>
            <AdditionalItemName>
              Daily Commuter
            </AdditionalItemName>
            <AdditionalItemPrice>
              $180
            </AdditionalItemPrice>
          </AdditionalDetails>
          <AdditionalDescription>
            Basic + new cables and housing and drivetrain cleaned.
          </AdditionalDescription>
        </AdditionalItem>
        <AdditionalItem>
          <AdditionalDetails>
            <AdditionalItemName>
              The Works
            </AdditionalItemName>
            <AdditionalItemPrice>
              $250
            </AdditionalItemPrice>
          </AdditionalDetails>
          <AdditionalDescription>
            Daily commuter + hubs &amp; headset &amp; bottom bracket overhauled.
          </AdditionalDescription>
        </AdditionalItem>
        <AdditionalItem>
          <AdditionalDetails>
            <AdditionalItemName>
              Restoration
            </AdditionalItemName>
            <AdditionalItemPrice>
              $50/hr
            </AdditionalItemPrice>
          </AdditionalDetails>
          <AdditionalDescription>
            Bringing a vintage bike back to life.
          </AdditionalDescription>
        </AdditionalItem>
        <AdditionalNote>
          * Prices shown include labor only
        </AdditionalNote>
      </AdditionalContainer>
    </AdditionalSection>
  );
};

export default Additional;
