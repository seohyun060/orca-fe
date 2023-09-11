import React, { useEffect } from 'react';
import Home from '../Home';
type Props = {
  location: string;
};

const HomeContainer = ({ location }: Props) => {
  const route = location.split('/')[1];
  return (
    <>
      <Home route={route} />
    </>
  );
};

export default HomeContainer;
