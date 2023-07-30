// components/HeroBanner.tsx

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const HeroBanner: React.FC = () => {
  const heroBannerContent = useSelector((state: RootState) => state.heroBannerContent);

  return (
    <div>
      <h1>{heroBannerContent.title}</h1>
      <p>{heroBannerContent.description}</p>
    </div>
  );
};

export default HeroBanner;
