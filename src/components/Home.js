import React from 'react';
import Titans from "../image/Titans.jpg";

const Home = () => {
  return (
    <>
      <img
        src={Titans}
        alt='Titans'
        style={{
          objectFit: 'cover',
          height: '100%',
          width: '100%',
        }}
      />

    </>
  )
}

export default Home