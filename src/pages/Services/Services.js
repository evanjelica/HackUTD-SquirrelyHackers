import React from 'react';
import { InfoSection, Pricing } from '../../Components';
import { homeObjThree } from './Data';

function Services() {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default Services;