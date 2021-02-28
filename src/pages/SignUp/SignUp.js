import React from 'react';
import { InfoSection, Map } from '../../Components';
import { homeObjOne } from './Data';

function SignUp() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <Map/>
    </>
  );
}

export default SignUp;