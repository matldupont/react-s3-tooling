import * as React from 'react';

import { WelcomeSection, WelcomeTagline, WelcomeHeading } from './welcome.styled';

const Welcome = () => {
  return (
    <WelcomeSection>
      <WelcomeTagline>You love your bike. So do we.</WelcomeTagline>
      <WelcomeHeading>Woodward Bicycle Co.</WelcomeHeading>
    </WelcomeSection>
  );
};

export default Welcome;
