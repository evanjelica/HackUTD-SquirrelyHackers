import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
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
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
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
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiHearts />
                </PricingCardIcon>

                <PricingCardCost>Food</PricingCardCost>
                <PricingCardLength>Assistance</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Unable to get grocceries due to the ice?</PricingCardFeature>
                  <PricingCardFeature>Click here to sign up with</PricingCardFeature>
                  <PricingCardFeature>Meals on Wheels!</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Get Assistance</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiHomeGarage />
                </PricingCardIcon>

                <PricingCardCost>Home and Auto</PricingCardCost>
                <PricingCardLength>Assistance</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>1000 New Users</PricingCardFeature>
                  <PricingCardFeature>$50,000 Budget</PricingCardFeature>
                  <PricingCardFeature>Lead Gen Analytics</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Get Assistance</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiReceiveMoney />
                </PricingCardIcon>

                <PricingCardCost>Banking</PricingCardCost>
                <PricingCardLength>Assistance</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Unlimited Users</PricingCardFeature>
                  <PricingCardFeature>Unlimited Budget</PricingCardFeature>
                  <PricingCardFeature>24/7 Support</PricingCardFeature>
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