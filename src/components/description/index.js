import * as React from 'react';

import {
  DescriptionSection,
  DescriptionContainer,
  DescriptionHeadings,
  DescriptionHeading,
  DescriptionText,
} from './description.styled';

const Description = () => {
  return (
    <DescriptionSection>
      <DescriptionContainer>
        <DescriptionHeadings>
          <DescriptionHeading>
            Professional Bike Repair Services.
          </DescriptionHeading>
          <DescriptionHeading>
            Without the Wait.
          </DescriptionHeading>
        </DescriptionHeadings>
        <DescriptionText>
          Located near Carling/Kirkwood, Ottawa.
        </DescriptionText>
      </DescriptionContainer>
    </DescriptionSection>
  );
};

export default Description;
