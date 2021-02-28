import React from 'react';
import { homeObjOne, homeObjTwo, homeObjFour } from './Data';
import { InfoSection, Pricing, Map, ChatBot } from '../../Components';

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