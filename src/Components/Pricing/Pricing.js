import React from 'react';
import { Button } from '../../globalStyles';
import { GiReceiveMoney, GiHearts } from 'react-icons/gi';
import { GiHomeGarage } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardCost,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Get Assistance!</PricingHeading>
          <PricingContainer>
            <PricingCard to='/get-started'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiHearts />
                </PricingCardIcon>

                <PricingCardCost>Food</PricingCardCost>
                <PricingCardFeatures>
                  <PricingCardFeature>Unable to get grocceries due to the ice?</PricingCardFeature>
                  <PricingCardFeature>Click here to sign up with</PricingCardFeature>
                  <PricingCardFeature>Meals on Wheels!</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Get Assistance</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/get-started'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiHomeGarage />
                </PricingCardIcon>

                <PricingCardCost>Home and Auto</PricingCardCost>
                <PricingCardFeatures>
                  <PricingCardFeature>Did your house or</PricingCardFeature>
                  <PricingCardFeature>car suffer damages?</PricingCardFeature>
                  <PricingCardFeature>Lead Gen Analytics</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Get Assistance</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/get-started'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiReceiveMoney />
                </PricingCardIcon>

                <PricingCardCost>Banking</PricingCardCost>
                <PricingCardFeatures>
                  <PricingCardFeature>On a tight budget due</PricingCardFeature>
                  <PricingCardFeature>to the storm?</PricingCardFeature>
                  <PricingCardFeature>We can help you get in touch!</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Get Assistance</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;