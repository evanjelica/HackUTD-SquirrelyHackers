import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection, Pricing, Map } from '../../components';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <Pricing />
      <InfoSection {...homeObjTwo} />
      <Map />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Home;