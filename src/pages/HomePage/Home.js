import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection, Pricing, Map, ChatBot } from '../../components';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <Pricing />
      <InfoSection {...homeObjTwo} />
      <Map />
      <InfoSection {...homeObjFour} />
      <ChatBot/>
    </>
  );
}

export default Home;