
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center justify-center my-6">
      <h1 className="text-5xl font-bold tracking-tighter">
        PETP<span className="relative">
          <span className="text-petpoja-red">O</span>
          <span className="absolute -right-5 top-0 text-petpoja-red">O</span>
        </span>JA
      </h1>
    </div>
  );
};

export default Logo;
